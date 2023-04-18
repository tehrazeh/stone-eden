import dropdownImg from "../../../../Assets/dropdown.png"
import { toggleDropdown } from '../../../../Redux/datafilter/slice'
import { DataSort } from "../../../../Redux/datafilter/types"
import { useAppDispatch } from '../../../../utils/hooks'

type DropdownButtonProps = {
  filter: DataSort,
  dropdownVisibility: boolean
  assetType: string
}

const DropdownButton:React.FC<DropdownButtonProps> = ({filter, dropdownVisibility, assetType}) => {
    const dispatch = useAppDispatch()
  return (
    <button className="bg-stone-800 m-2 h-8 hover:bg-stone-600 w-[90%]
    rounded font-thin text-emerald-300 relative flex items-center justify-start pl-2"
     onClick={() => {
       dispatch(toggleDropdown(!dropdownVisibility))
     }} 
     onBlur={() => { // to give time for onclick of li element to execute before rerender that caused by onblur
       setTimeout(() => dispatch(toggleDropdown(!dropdownVisibility)), 150)
     }}>
       {(filter === 'default') ? <>{filter.toUpperCase()}</> : <>
       <img src={require(`../../../../Assets/${assetType}/${filter.split(' ')[0].toLowerCase()}.png`)}
         className="w-9 h-8"
         alt={filter.toLowerCase()} />
       <img src={require(`../../../../Assets/${filter.split(' ')[1].toLowerCase()}.png`)}
         className="w-9 h-8 brightness-75"
         alt={filter.toLowerCase()} /></>}
       <img src={dropdownImg}
        className={`${dropdownVisibility ? 'brightness-125' : 'brightness-75'} w-[9px] absolute bottom-1 right-1`}
        alt='dropdown' />
       </button>
  )
}

export default DropdownButton