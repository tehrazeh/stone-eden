import { useEffect } from "react"
import { setCurrentPage, setTotalItems, setTotalPages } from "../../../Redux/pagination/slice"
import { useAppSelector, useAppDispatch } from "../../../utils/hooks"

const Pagination = () => {
    const cards = useAppSelector(state => state.data.data)
    const dispatch = useAppDispatch()
    const {currentPage, elementsPerPage, totalPages} = useAppSelector(state => state.pagination)
    useEffect(() => {
        dispatch(setTotalPages(cards.length))
        dispatch(setTotalItems(cards.length))
    }, [cards, dispatch])

    let pageButtons = []

    if (totalPages > 1) {
      for (let i = 0; i < totalPages; i++) {
        pageButtons.push(
        <button className='border-2 border-solid border-red-400 m-2 rounded-full'
                key={i}
                onClick={() => {dispatch(setCurrentPage(i))}}>
          {i + 1}
        </button>)
      }
    }
    
  return (
    <div>
        <p>pagesize: {elementsPerPage}</p>
        <p>totalPages: {totalPages}</p>
        <p>current page: {currentPage + 1}</p>
        <p>total items: {cards.length}</p>
        {/* <div>
          <button className='border-2 border-solid border-red-400 m-2'>{`<`}</button>

          <button className='border-2 border-solid border-red-400 m-2'>{`>`}</button>
        </div> */}
        {pageButtons}
    </div>
  )
}

export default Pagination