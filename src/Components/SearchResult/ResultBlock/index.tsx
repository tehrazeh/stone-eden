import { useCallback, useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import {setCurrentPage, setDisplayedItems} from "../../../Redux/pagination/slice"
import { paginateArray, sortArray } from "../../../utils/functions"
import { useAppSelector, useAppDispatch } from "../../../utils/hooks"
import scrollUpImg from "../../../Assets/scrollup.png"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
import ResultFilter from "../ResultFilter"
import { DropdownFilters } from "../../../Redux/datafilter/types"
import { Card } from "../../../Redux/data/types"
import { setTempData } from "../../../Redux/data/slice"
import { Status } from "../../../Redux/info/types"
import FadeLoader from "react-spinners/FadeLoader"
import notFoundImg from "../../../Assets/not-found.png"
const ResultBlock = () => {

  // get data from state
  const { data, tempData, status } = useAppSelector((state) => state.data)
  const { currentPage, elementsPerPage, infiniteScroll} = useAppSelector(state => state.pagination)
  const { nameFilter, sortFilter, dropdownFilters, activeFilters } = useAppSelector(state => state.dataFilter)
  const [displayedData, setDisplayedData] = useState(tempData)
  const dispatch = useAppDispatch()

  // https://github.com/thebuilder/react-intersection-observer#readme
  // using multiple refs because inView ref does not know how to handle scroll
  // react-intersection-observer for detecting visibility of the element
  const ref = useRef<HTMLDivElement | null>(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0
  })

  // to scroll up to pagination bar
  const handleScroll = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  // @ts-ignore
  const setRefs = useCallback((node) => {
    ref.current = node
    inViewRef(node)
  }, [inViewRef])

  // filter the data returned from api, based on input
  useEffect(() => {
    setDisplayedData(tempData.filter(element => {
      return element.name.toLowerCase().includes(nameFilter.toLowerCase())
    }))
  }, [nameFilter, tempData])

  // sort the data depending on setting that user selected
  useEffect(() => {
    setDisplayedData(sortArray(displayedData, tempData, sortFilter))
  }, [sortFilter])


  // when filters change
  useEffect(() => {
    if (!infiniteScroll) { 
      // during infinite mode scroll there is technically one page, and if it changes, it triggers
      // process of adding elements to an array of displayed items, which allows an infinite glitch
      dispatch(setCurrentPage(1)) // reset current page on filter update to avoid being stuck on not existing page
    }   
    if (activeFilters.length > 0) {
      let tempItems = activeFilters.map((selectedFilter) => {
        return data.filter((card) => {
          if (card[selectedFilter as keyof Card] !== undefined) {
            return card[selectedFilter as keyof Card]?.toString().toLowerCase().split(' ').join('') === dropdownFilters[`${selectedFilter}Filter` as keyof DropdownFilters]
          }
        })
      })
      // thanks!!!, combine the intersection from each array of items that match one filter
      // https://stackoverflow.com/questions/37320296/how-to-calculate-intersection-of-multiple-arrays-in-javascript-and-what-does-e
      const filteredData = tempItems.reduce((a, b) => a.filter(c => b.includes(c)))
      dispatch(setTempData(filteredData))
    } else {
      dispatch(setTempData([...data])) // no filters are active, reset the data
    }
  }, [activeFilters, dropdownFilters])

  // set the number of displayed items based on the input filter, for pagination
  useEffect(() => {
    dispatch(setDisplayedItems(displayedData.length))
  }, [displayedData.length, dispatch, tempData.length])

  // return paginated portion of spesicic number (elementsPerPage) of cards for current page
  const cardPortion = paginateArray(displayedData, elementsPerPage, currentPage - 1)
  let pageElements: JSX.Element[]

  // if infinitescroll is on, add cards to pile with each currentpage change
  // in case of infinitescroll when the footer is seen, page is incremented
  // useEffect(() => {
  //   if (infiniteScroll) {
  //     dispatch(addCardsToPile(cards))
  //   }
  // }, [currentPage, infiniteScroll])

  

  if (infiniteScroll) { // infinite scroll is on, display pile that will be updated with each scroll to footer
    // when you come back to implementing this featere with preloading and combine it with filters, map through
    // infinite pile, or create third array that will always contain what should be displayed
    pageElements = displayedData.map((element, index) => { 
      return <CardBlock key={index} card={element} />
    })
  } else { // regular pagination mode
    // get array of component elements to display, map through portion of cards for current page
    pageElements = cardPortion.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  }

  // loader spinner  
  if (status === Status.LOADING) {
    return <div className="flex flex-wrap justify-center h-full w-full items-center">
      <FadeLoader color="#36d7b7" height={40} margin={40} radius={20} width={10}/>
    </div>
  }
  console.log(status)

  return (
    <div className='w-full bg-stone-800 flex flex-wrap justify-center items-center flex-col'>
      <div ref={setRefs} className="w-full mt-1 flex justify-center">
        <Pagination />
      </div>
      <div className='flex flex-col w-full bg-stone-800 mb-1'>
        <div className="w-full flex justify-center"><ResultFilter /></div>
        <div className="w-full flex flex-wrap justify-evenly my-1">{pageElements}</div>
        {status === Status.ERROR && <div className="text-6xl pt-4 text-cyan-600">{status.toUpperCase()}</div>}
      {((displayedData.length === 0 && status === Status.SUCCESS) || status === Status.ERROR)
        && <div><img src={notFoundImg} className='w-[500px] m-auto' alt='not found' /></div>}
        {!inView &&
          <div className="rounded-xl opacity-80 w-14 h-14 fixed bottom-[50px]
           left-[30px] cursor-pointer  hover:brightness-125"
            onClick={() => {
              handleScroll()
            }}>
            <img src={scrollUpImg} alt='scroll up' /></div>}
      </div>
    </div>
  )
}

export default ResultBlock