import { useEffect } from "react"
import { setDisplayedItems, setTotalItems } from "../../../Redux/pagination/slice"
import { paginateArray } from "../../../utils/functions"
import { useAppSelector, useAppDispatch } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
const ResultBlock = () => {

  // get data from state
  const { data } = useAppSelector((state) => state.data)
  const { currentPage, elementsPerPage } = useAppSelector(state => state.pagination)
  const nameFilter = useAppSelector(state => state.dataFilter.nameFilter)

  const dispatch = useAppDispatch()

  // filter the data returned from api, based on input
  const filteredData = data.filter(element => {
    return element.name.toLowerCase().includes(nameFilter.toLowerCase())
  })

  // seems like I do not need total items count for now, but just in case i will leave it here
  // useEffect(() => {
  //   dispatch(setTotalItems(data.length))
  // })

  // set the number of displayed items based on the input filter
  useEffect(() => {
    dispatch(setDisplayedItems(filteredData.length))
  }, [filteredData.length, dispatch, data.length])

  // return paginated version to display the specific number of elemets per page
  const cards = paginateArray(filteredData, elementsPerPage, currentPage - 1)

  // get array of component elements to display
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