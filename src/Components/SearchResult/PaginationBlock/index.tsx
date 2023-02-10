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

    const regularButton = `bg-stone-800 border-solid border-2 border-stone-500
    m-2 w-10 h-10 flex items-center justify-center align-middle leading-10
    rounded-full text-emerald-400 text-xl transition-all duration-200 ease-linear
    hover:bg-stone-700 hover:border-stone-400`

    const activeButton = `bg-stone-600 border-solid border-2 border-stone-400
    m-2 w-10 h-10 flex items-center justify-center align-middle leading-10
    rounded-full text-emerald-200 text-xl transition-all duration-200 ease-linear
    hover:bg-stone-500 hover:border-stone-300`
    
    const changePageButton = `bg-stone-800 border-solid border-2 border-stone-500
    m-2 w-10 h-10 flex items-center justify-center align-middle leading-10
    rounded-full text-emerald-400 text-2xl transition-all duration-200 ease-linear`


    let pageButtons = []

    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
        <button className={currentPage === i ? activeButton : regularButton}
                key={i}
                onClick={() => {dispatch(setCurrentPage(i))}}>
        {i}
        </button>)
      }
    }
  return (
    <div>
        <p>pagesize: {elementsPerPage}</p>
        <p>totalPages: {totalPages}</p>
        <p>current page: {currentPage}</p>
        <p>total items: {cards.length}</p>
        <div className="flex bg-slate-700 rounded">
          <button className={`${changePageButton} ${currentPage - 1 === 0 ? 
          'opacity-60' : 'hover:bg-stone-700 hover:border-stone-400'}`}
          disabled={currentPage - 1 === 0}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
            <p>{`<`}</p>
          </button>
          {pageButtons}
          <button className={`${changePageButton} ${currentPage === totalPages ? 
          'opacity-60' : 'hover:bg-stone-700 hover:border-stone-400'}`}
          disabled={currentPage === totalPages}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
            {`>`}
          </button>
        </div>
    </div>
  )
}

export default Pagination