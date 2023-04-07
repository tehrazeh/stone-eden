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
  const { data } = useAppSelector((state) => state.data)
  const { currentPage, elementsPerPage, infiniteScroll, infinitePile } = useAppSelector(state => state.pagination)
  const { nameFilter, sortFilter } = useAppSelector(state => state.dataFilter)
  const [displayedData, setDisplayedData] = useState(data)

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

  const dispatch = useAppDispatch()

  // filter the data returned from api, based on input
  useEffect(() => {
    setDisplayedData(data.filter(element => {
      return element.name.toLowerCase().includes(nameFilter.toLowerCase())
    }))
  }, [nameFilter, data])


  // sort the data depending on type user selected
  useEffect(() => {
    setDisplayedData(sortArray(displayedData, data, sortFilter))
  }, [sortFilter])

  // seems like I do not need total items count for now, but just in case i will leave it here
  // useEffect(() => {
  //   dispatch(setTotalItems(data.length))
  // })  

  // set the number of displayed items based on the input filter
  useEffect(() => {
    dispatch(setDisplayedItems(displayedData.length))
  }, [displayedData.length, dispatch, data.length])

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

  if (infiniteScroll) { // infinit scroll is one, display pile that will be updated with each scroll to footer
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
    <div className='bg-neutral-700 w-full flex flex-wrap justify-center items-center flex-col'>
      <div ref={setRefs} className="w-full my-4 flex justify-center">
        <Pagination />
      </div>
      <div className='grid grid-cols-5 w-full grid-rows-1 bg-stone-800'>
        <div className="w-full col-span-1 p-2 flex justify-center"><ResultFilter /></div>
        <div className="w-full col-span-4 flex flex-wrap justify-center">{pageElements}</div>
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