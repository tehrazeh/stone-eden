import { setDataFilter } from "../../../Redux/datafilter/slice";
import { DataSort } from "../../../Redux/datafilter/types"
import { useAppDispatch } from "../../../utils/hooks";

const ResultFilter = () => {
    const dispatch = useAppDispatch()
  return (
    <div className="rounded bg-yellow-800 border-2 border-yellow-600 w-full flex justify-center items-start">
        <select className="rounded ring-0 w-8/12 h-8 bg-stone-800 border-solid border-2 m-2 border-stone-500 text-emerald-400
      hover:bg-stone-600 hover:border-stone-400 focus:ring-0 focus:bg-stone-700 focus:border-stone-500 outline-0"
        onChange={(e) => {
          dispatch(setDataFilter(e.target.value))
          }}
        >
          {/* MAKE IT TO STAY AT SORT AFTER EACH NEW SEARCH */}
        <option value="" selected>Sort</option>
        <option value={DataSort.HEALTH_DESC}>health down</option>
        <option value={DataSort.HEALTH_ASC}>health up</option>
        <option value={DataSort.COST_DESC}>cost down</option>
        <option value={DataSort.COST_ASC}>cost up</option>
        <option value={DataSort.ATTACK_DESC}>attack down</option>
        <option value={DataSort.ATTACK_ASC}>attack up</option>
      </select>
    </div>
  )
}

export default ResultFilter