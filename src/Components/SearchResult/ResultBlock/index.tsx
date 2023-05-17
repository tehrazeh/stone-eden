import { useCallback, useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { addCardsToPile, setDisplayedItems } from "../../../Redux/pagination/slice"
import { paginateArray, sortArray } from "../../../utils/functions"
import { useAppSelector, useAppDispatch } from "../../../utils/hooks"
import scrollUpImg from "../../../Assets/scrollup.png"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
import ResultFilter from "../ResultFilter"
const ResultBlock = () => {

  // get data from state
  const { data, tempData } = useAppSelector((state) => state.data)
  const { currentPage, elementsPerPage, infiniteScroll, infinitePile } = useAppSelector(state => state.pagination)
  const { nameFilter, sortFilter, dropdownFilters, activeFilters  } = useAppSelector(state => state.dataFilter)
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

  useEffect(() => {
    // setDisplayedData(data.filter(element => {
    //   if (element['playerClass'])
    //   return element[`playerClass`].toLowerCase().split(' ').join('') === dropdownFilters.classFilter
    // }))
    // if (activeFilters.length > 0) {
    //   let tempItems = activeFilters.map((selectedFilter) => {
    //     return data.filter((card) => card)
    //   })
    // }
    // console.log(activeFilters)
  }, [activeFilters])

  // set the number of displayed items based on the input filter
  useEffect(() => {
    dispatch(setDisplayedItems(displayedData.length))
  }, [displayedData.length, dispatch, tempData.length])

  // return paginated version to display the specific number of elemets per page
  const cards = paginateArray(displayedData, elementsPerPage, currentPage - 1)
  let pageElements: JSX.Element[]

  // if infinitescroll is on, add cards to pile with each currentpage change
  // in case of infinitescroll when the footer is seen, page is incremented
  useEffect(() => {
    if (infiniteScroll) {
      dispatch(addCardsToPile(cards))
    }
  }, [currentPage, infiniteScroll])

  if (infiniteScroll) { // infinit scroll is on, display pile that will be updated with each scroll to footer
    pageElements = infinitePile.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  } else { // regular pagination mode
    // get array of component elements to display
    pageElements = cards.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  }

  return (
    <div className='w-full bg-stone-800 flex flex-wrap justify-center items-center flex-col'>
      <div ref={setRefs} className="w-full my-1 flex justify-center">
        <Pagination />
      </div>
      <div className='flex flex-col bg-stone-800'>
        <div className="w-full flex justify-center"><ResultFilter /></div>
        <div className="w-full flex flex-wrap justify-evenly">{pageElements}</div>
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