import { setDataFilter } from "../../../Redux/datafilter/slice";
import { DataSort } from "../../../Redux/datafilter/types"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";

const ResultFilter = () => {
    const dispatch = useAppDispatch()
    console.log(DataSort.HEALTH_DESC.split(' ')[0])
    const sortFilter = useAppSelector(state => state.dataFilter.sortFilter)
  return (
    <div className="rounded bg-yellow-800 border-2 border-yellow-600 w-full flex justify-center items-start">
        <select className="rounded ring-0 w-8/12 h-8 bg-stone-800 border-solid border-2 m-2 border-stone-500 text-emerald-400
      hover:bg-stone-600 hover:border-stone-400 focus:ring-0 focus:bg-stone-700 focus:border-stone-500 outline-0"
        onChange={(e) => {
          dispatch(setDataFilter(e.target.value))
          }}
        value={sortFilter}>
        <option value={DataSort.DEFAULT}>{DataSort.DEFAULT.toUpperCase()}</option>
        <option value={DataSort.HEALTH_DESC}>{DataSort.HEALTH_DESC}</option>
        <option value={DataSort.HEALTH_ASC}>{DataSort.HEALTH_ASC}</option>
        <option value={DataSort.COST_DESC}>{DataSort.COST_DESC}</option>
        <option value={DataSort.COST_ASC}>{DataSort.COST_ASC}</option>
        <option value={DataSort.ATTACK_DESC}>{DataSort.ATTACK_DESC}</option>
        <option value={DataSort.ATTACK_ASC}>{DataSort.ATTACK_ASC}</option>
      </select>
    </div>
  )
}

export default ResultFilter