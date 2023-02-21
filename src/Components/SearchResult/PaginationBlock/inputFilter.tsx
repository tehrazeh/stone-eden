import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import { setNameFilter } from "../../../Redux/datafilter/slice"
import clearImg from '../../../Assets/clear.png'
const InputFilter = () => {
    const dispatch = useAppDispatch()
    const nameFilter = useAppSelector(state => state.dataFilter.nameFilter)
  return (
    <div className='w-full flex justify-center items-center h-full relative'>
        <input type='text' value={nameFilter} onChange={(e) => {
            dispatch(setNameFilter(e.target.value))
        }}
        className='rounded w-10/12 p-3 bg-stone-800 border-solid border-2 border-stone-500
        focus:bg-stone-700 focus:border-stone-400 focus:border-2 text-emerald-300 text-xl outline-0'/>
        { nameFilter && <img src={clearImg} onClick={() => {
          dispatch(setNameFilter(''))
        }} 
        className='w-5 absolute top-5 right-16 cursor-pointer opacity-70 hover:brightness-125 hover:scale-110' alt='clear'/>}
    </div>
  )
}

export default InputFilter