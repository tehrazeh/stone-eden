import { setCurrentPage, setElementsPerPage } from "../../../Redux/pagination/slice";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";

const ElementsNumber = () => {
  const elementsPerPage = useAppSelector(state => state.pagination.elementsPerPage)
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col mx-2">
      <label className="text-emerald-400 mb-1">Cards per page</label>
      <select className="rounded ring-0 bg-stone-800 border-solid border-2 mb-2 border-stone-500 text-emerald-400
      hover:bg-stone-600 hover:border-stone-400 focus:ring-0 focus:bg-stone-700 focus:border-stone-500 outline-0"
        onChange={(e) => {
          dispatch(setElementsPerPage(Number(e.target.value)));
          dispatch(setCurrentPage(1))
          }}
        defaultValue={elementsPerPage}>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  )
}

export default ElementsNumber