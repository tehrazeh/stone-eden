import dropdownImg from "../../../../Assets/dropdown.png"
import { toggleDropdown } from '../../../../Redux/datafilter/slice'
import { DataSort, VisibilityChecks } from "../../../../Redux/datafilter/types"
import { optionCheck } from "../../../../utils/functions"
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'

type DropdownButtonProps = {
  filter: DataSort | string,
  filterType: string,
  filterList: string[]
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ filter, filterType, filterList }) => {
  const dispatch = useAppDispatch()
  const dropdownVisibility = useAppSelector(state => state.dataFilter.visibilityChecks)
  return (
    <button className="bg-stone-800 h-12 hover:bg-stone-600 w-full
    rounded font-thin text-emerald-300 relative flex items-center justify-start pl-2"
      onClick={() => {
        dispatch(toggleDropdown(
          {
            visibility: !dropdownVisibility[`${filterType}DropdownVisibility` as keyof VisibilityChecks],
            filterType
          }))
      }}>
      {/* if the default value, display the text of filter type, else show the current state of selected filter */}
      {(filterList.includes(filter)) ? <>{filter.toUpperCase()}</> : <>

        {(filterType === 'attribute') ?
          <img src={require(`../../../../Assets/${filterType}/${filter.split('_')[0]}.png`)}
            className="w-12 h-11" alt={filter} />

          :
          <img src={(optionCheck(filterType).includes(filter.split(' ').join('')) ?
            require(`../../../../Assets/${filterType}/${filter.split(' ').join('')}.png`) :
            require(`../../../../Assets/fallbackFilter.png`))} className="w-11 h-11" alt={filter} />
        }
        {(filterType === 'attribute') ? <img src={require(`../../../../Assets/${filter.split('_')[1]}.png`)}
          className="w-11 h-10 brightness-75"
          alt={filter} /> : <p className="ml-4 uppercase">{filter}</p>}
      </>}
      <img src={dropdownImg}
        className={`${dropdownVisibility[`${filterType}DropdownVisibility` as keyof VisibilityChecks]
          ? 'brightness-125' : 'brightness-75'} w-[9px] absolute bottom-1 right-1`}
        alt='dropdown' />
    </button>
  )
}

export default DropdownButton