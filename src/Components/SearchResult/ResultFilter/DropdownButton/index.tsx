import dropdownImg from "../../../../Assets/dropdown.png"
import { toggleDropdown } from '../../../../Redux/datafilter/slice'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'

const DropdownButton = () => {
    const dispatch = useAppDispatch()
    const {sortFilter, isDropdownVisible} = useAppSelector(state => state.dataFilter)
  return (
    <button className="bg-stone-800 m-2 h-8 hover:bg-stone-600 w-[80%]
    rounded font-thin text-emerald-300 relative flex items-center justify-start pl-2"
     onClick={() => {
       dispatch(toggleDropdown(!isDropdownVisible))
     }} 
     onBlur={() => { // to give time for onclick of li element to execute before rerender that caused by onblur
       setTimeout(() => dispatch(toggleDropdown(!isDropdownVisible)), 150)
     }}>
       {(sortFilter === 'default') ? <>{sortFilter.toUpperCase()}</> : <>
       <img src={require(`../../../../Assets/Attributes/${sortFilter.split(' ')[0].toLowerCase()}.png`)}
         className="w-7 h-6"
         alt={sortFilter.toLowerCase()} />
       <img src={require(`../../../../Assets/${sortFilter.split(' ')[1].toLowerCase()}.png`)}
         className="w-7 h-6 brightness-75"
         alt={sortFilter.toLowerCase()} /></>}
       <img src={dropdownImg}
        className={`${isDropdownVisible ? 'brightness-125' : 'brightness-75'} w-[9px] absolute bottom-1 right-1`}
        alt='dropdown' />
       </button>
  )
}

export default DropdownButton