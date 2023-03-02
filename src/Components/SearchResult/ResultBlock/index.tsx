import { useEffect, useState } from "react"
import { setDisplayedItems } from "../../../Redux/pagination/slice"
import { paginateArray, sortArray } from "../../../utils/functions"
import { useAppSelector, useAppDispatch } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
import ResultFilter from "../ResultFilter"
const ResultBlock = () => {

  // get data from state
  const { data } = useAppSelector((state) => state.data)
  const { currentPage, elementsPerPage } = useAppSelector(state => state.pagination)
  const {nameFilter, sortFilter} = useAppSelector(state => state.dataFilter)

  const [displayedData, setDisplayedData] = useState(data)

  const dispatch = useAppDispatch()

  // filter the data returned from api, based on input
  useEffect(() => {
    setDisplayedData(data.filter(element => {
      return element.name.toLowerCase().includes(nameFilter.toLowerCase())
    }))
  }, [nameFilter, data])


  // sort the data depending on type user selected
  useEffect(() => {
    setDisplayedData(sortArray(displayedData, sortFilter))
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

  // get array of component elements to display
  const pageElements = cards.map((element, index) => {
    return <CardBlock key={index} card={element} />
  })
  return (
    <div className='bg-neutral-700 w-full flex flex-wrap justify-center items-center flex-col'>
      <div className="w-full my-4 flex justify-center">
        <Pagination />
      </div>
      <div className='grid grid-cols-5 w-full grid-rows-1 bg-stone-800'>
        <div className="w-full col-span-1 p-2 flex justify-center"><ResultFilter/></div>
        <div className="w-full col-span-4 flex flex-wrap justify-center">{pageElements}</div>
      </div>
    </div>
  )
}

export default ResultBlock