import { paginateArray } from "../../../utils/functions"
import { useAppSelector } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
import Pagination from "../PaginationBlock"
const ResultBlock = () => {
    const {data} = useAppSelector((state) => state.data)
    const {currentPage, elementsPerPage} = useAppSelector(state => state.pagination)
    const cards = data.filter((element, index, arr) => 
    // thanks! https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
    arr.findIndex(element2 => (element2.name===element.name)) === index).filter((item) => {
      return item.type?.toLowerCase() !== 'enchantment' // temporarily avoid enchantments cause they are baggy
    })

    const paginatedCards = paginateArray(cards, elementsPerPage, currentPage)
    
    const pageElements = paginatedCards.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  return (
    <div className='bg-slate-500 w-full flex flex-wrap justify-center items-center'>
      <Pagination />
        {pageElements}
    </div>
  )
}

export default ResultBlock