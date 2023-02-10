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

    const regularButton = `bg-stone-700 border-solid border-2 border-stone-500
                          m-2 w-6 h-6 p-4 flex items-center justify-center
                          rounded-full text-emerald-400  transition-all duration-200 ease-linear`
    const activeButton = `bg-stone-400 border-solid border-2 border-stone-200
                          m-2 w-6 h-6 p-4 flex items-center justify-center
                          rounded-full text-emerald-200  transition-all duration-200 ease-linear`


    let pageButtons = []

    if (totalPages > 1) {
      for (let i = 0; i < totalPages; i++) {
        pageButtons.push(
        <button className={currentPage === i ? activeButton : regularButton}
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
        <div className="flex bg-slate-700 rounded">
        {pageButtons}
        </div>
    </div>
  )
}

export default Pagination