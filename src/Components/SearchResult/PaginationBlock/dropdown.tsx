import { setCurrentPage, setElementsPerPage, setInfiniteScroll, setTotalPages } from "../../../Redux/pagination/slice";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";

const ElementsNumber = () => {
  const elementsPerPage = useAppSelector(state => state.pagination.elementsPerPage)
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col mx-4">
      <label className="text-emerald-400 mb-1">Cards per page</label>
      <select className="rounded ring-0 bg-stone-800 border-solid border-2 mb-2 border-stone-500 text-emerald-400
      hover:bg-stone-600 hover:border-stone-400 focus:ring-0 focus:bg-stone-700 focus:border-stone-500 outline-0"
        onChange={(e) => {
          
          if (e.target.value === '0') { // condition for infinite scrolling
            dispatch(setTotalPages(0))
            dispatch(setInfiniteScroll(true))
            dispatch(setElementsPerPage(15))
          } else { // conditions for regular pagination
            dispatch(setElementsPerPage(Number(e.target.value)))
            dispatch(setInfiniteScroll(false))
          }
          dispatch(setCurrentPage(1)) // after filter reset set the fisrt page as current bu default
        }}
        defaultValue={elementsPerPage}>
        <option>15</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
        <option value={0}>All</option>
      </select>
    </div>
  )
}

export default ElementsNumber