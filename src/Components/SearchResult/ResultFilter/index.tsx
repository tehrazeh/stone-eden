import SortOptions from "./SortOptions";
import DropdownButton from "./DropdownButton";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import { isInfo } from "../../../utils/guards";
import FilterOptions from "./FilterOptions";
import { toggleDropdown } from "../../../Redux/datafilter/slice";
import QualityFilterBlock from "./QualityFilterBlock";

const ResultFilter = () => {
  const { sortFilter, visibilityChecks, dropdownFilters, filterList } = useAppSelector(state => state.dataFilter)
  const dispatch = useAppDispatch()
  const info = useAppSelector(state => {
    if (isInfo(state.info.info)) {
      return state.info.info
    }
  })

  return (
    <div className="bg-stone-900 text-lg border-solid border-2 flex justify-evenly
     border-neutral-600 w-full mx-4 max-h-[60px] h-[60px] z-30 items-center rounded">
      <div className="w-[20%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'attribute' }))
      }, 350)}>
        <DropdownButton filter={sortFilter}
          filterType='attribute' filterList={filterList} />
        <SortOptions />
      </div>
      <div className="w-[20%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'class' }))
      }, 350)}>
        <DropdownButton filter={dropdownFilters.classFilter}
          filterType='class' filterList={filterList} />
        {info?.classes && <FilterOptions options={info.classes}
          assetType="class" />}
      </div>
      <div className="w-[20%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'type' }))
      }, 350)}>
        <DropdownButton filter={dropdownFilters.typeFilter}
          filterType='type' filterList={filterList} />
        {info?.types && <FilterOptions options={info.types}
          assetType="type"/>}
      </div>
      <div className="w-[20%]"><QualityFilterBlock /></div>
    </div>
  )
}

export default ResultFilter