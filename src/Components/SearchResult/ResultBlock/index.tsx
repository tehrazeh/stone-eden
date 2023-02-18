import { paginateArray } from "../../../utils/functions"
import { useAppSelector } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
const ResultBlock = () => {
    const {data} = useAppSelector((state) => state.data)
    const {currentPage, elementsPerPage} = useAppSelector(state => state.pagination)

    const cards = paginateArray(data, elementsPerPage, currentPage - 1)
    
    const pageElements = cards.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  return (
    <div className='bg-slate-500 w-full flex flex-wrap justify-center items-center flex-col'>
      <div>
      {Math.ceil(data.length / elementsPerPage) > 1 && <Pagination />}
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {pageElements}
      </div>
    </div>
  )
}

export default ResultBlock