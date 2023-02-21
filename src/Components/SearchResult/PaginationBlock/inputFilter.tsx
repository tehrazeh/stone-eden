import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import { setNameFilter } from "../../../Redux/datafilter/slice"

const InputFilter = () => {
    const dispatch = useAppDispatch()
    const nameFilter = useAppSelector(state => state.dataFilter.nameFilter)
  return (
    <div className='w-full flex justify-center items-center h-full'>
        <input type='text' value={nameFilter} onChange={(e) => {
            dispatch(setNameFilter(e.target.value))
        }}
        className='rounded w-10/12 p-2 bg-stone-800 border-solid border-2 border-stone-500
        focus:bg-stone-700 focus:border-stone-400 focus:border-2 text-emerald-300 text-xl outline-0'/>
    </div>
  )
}

export default InputFilter