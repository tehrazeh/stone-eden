import dropdownImg from "../../../../Assets/dropdown.png"
import { toggleDropdown } from '../../../../Redux/datafilter/slice'
import { DataSort } from "../../../../Redux/datafilter/types"
import { useAppDispatch } from '../../../../utils/hooks'

type DropdownButtonProps = {
  filter: DataSort | string,
  dropdownVisibility: boolean,
  filterType: string
}

const DropdownButton:React.FC<DropdownButtonProps> = ({filter, dropdownVisibility, filterType}) => {
    const dispatch = useAppDispatch()
  return (
    <button className="bg-stone-800 my-2 h-12 hover:bg-stone-600 w-full
    rounded font-thin text-emerald-300 relative flex items-center justify-start pl-2"
     onClick={() => {
       dispatch(toggleDropdown({visibility: !dropdownVisibility, filterType}))
     }} 
    //  onBlur={() => { // to give time for onclick of li element to execute before rerender that caused by onblur
    //    setTimeout(() => dispatch(toggleDropdown({visibility: !dropdownVisibility, filter})), 150)
    //  }}
    >
      {/* if the default value, display the text of filter type, else show the current state of selected filter */}
       {(filterType.includes(filter)) ? <>{filter.toUpperCase()}</> : <>
       <img src={require(`../../../../Assets/${filterType}/${filter.split('_')[0].toLowerCase()}.png`)}
         className="w-11 h-11"
         alt={filter.toLowerCase()} />
         {(filterType === 'Attribute') ? <img src={require(`../../../../Assets/${filter.split('_')[1].toLowerCase()}.png`)}
         className="w-11 h-10 brightness-75"
          alt={filter.toLowerCase()} /> : <p className="ml-4 uppercase">{filter}</p>}
         </>}
       <img src={dropdownImg}
        className={`${dropdownVisibility ? 'brightness-125' : 'brightness-75'} w-[9px] absolute bottom-1 right-1`}
        alt='dropdown' />
       </button>
  )
}

export default DropdownButton