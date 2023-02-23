import { useEffect } from "react"
import { setDisplayedItems, setTotalItems } from "../../../Redux/pagination/slice"
import { paginateArray } from "../../../utils/functions"
import { useAppSelector, useAppDispatch } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
const ResultBlock = () => {
    const {data} = useAppSelector((state) => state.data)
    const {currentPage, elementsPerPage} = useAppSelector(state => state.pagination)
    const nameFilter = useAppSelector(state => state.dataFilter.nameFilter)
    const dispatch = useAppDispatch()
    const filteredData = data.filter(element => {
      return element.name.toLowerCase().includes(nameFilter.toLowerCase())
    })

    useEffect(() => {
      dispatch(setDisplayedItems(filteredData.length))
    }, [filteredData.length, dispatch, data.length])

    const cards = paginateArray(filteredData, elementsPerPage, currentPage - 1)   
    const pageElements = cards.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  return (
    <div className='bg-neutral-700 w-full flex flex-wrap justify-center items-center flex-col'>
      <div className="w-full my-4 flex justify-center">
      <Pagination />
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {pageElements}
      </div>
    </div>
  )
}

export default ResultBlock