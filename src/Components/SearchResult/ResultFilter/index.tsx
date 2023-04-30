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
        dispatch(toggleDropdown({ visibility: false, filterType: 'Attribute' }))
      }, 200)}>
        <DropdownButton filter={sortFilter} dropdownVisibility={visibilityChecks.attributeDropdownVisibility}
          filterType='Attribute' filterList={filterList} />
        <SortOptions />
      </div>
      <div className="w-[20%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'Class' }))
      }, 200)}>
        <DropdownButton filter={dropdownFilters.classFilter} dropdownVisibility={visibilityChecks.classDropdownVisibility}
          filterType='Class' filterList={filterList} />
        {info?.classes && <FilterOptions options={info.classes}
          dropdownVisibility={visibilityChecks.classDropdownVisibility}
          assetType="Class" filter={dropdownFilters.classFilter} />}
      </div>
      <div className="w-[20%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'Type' }))
      }, 200)}>
        <DropdownButton filter={dropdownFilters.typeFilter} dropdownVisibility={visibilityChecks.typeDropdownVisibility}
          filterType='Type' filterList={filterList} />
        {info?.types && <FilterOptions options={info.types}
          dropdownVisibility={visibilityChecks.typeDropdownVisibility}
          assetType="Type" filter={dropdownFilters.typeFilter} />}
      </div>
      <div className="w-[20%]"><QualityFilterBlock /></div>
    </div>
  )
}

export default ResultFilter