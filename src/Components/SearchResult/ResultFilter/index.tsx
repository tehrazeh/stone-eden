import SortOptions from "./SortOptions";
import DropdownButton from "./DropdownButton";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import { isInfo } from "../../../utils/guards";
import FilterOptions from "./FilterOptions";
import { toggleDropdown } from "../../../Redux/datafilter/slice";

const ResultFilter = () => {
  const { sortFilter, visibilityChecks, classFilter, typeFilter, filterList } = useAppSelector(state => state.dataFilter)
  const dispatch = useAppDispatch()
  const info = useAppSelector(state => {
    if (isInfo(state.info.info)) {
      return state.info.info
    }
  })

  return (
    <div className="bg-stone-900 text-lg border-solid border-2 flex justify-evenly
     border-neutral-600 w-full mx-4 max-h-[60px] h-[60px] z-30 items-center rounded">
      <div className="w-[25%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'Attribute' }))
      }, 200)}>
        <DropdownButton filter={sortFilter} dropdownVisibility={visibilityChecks.attributeDropdownVisibility}
          filterType='Attribute' filterList={filterList} />
        <SortOptions />
      </div>
      <div className="w-[25%] h-12 my-1" onMouseLeave={() => setTimeout(() => {
        dispatch(toggleDropdown({ visibility: false, filterType: 'Class' }))
      }, 200)}>
        <DropdownButton filter={classFilter} dropdownVisibility={visibilityChecks.classDropdownVisibility}
          filterType='Class' filterList={filterList} />
        {info?.classes && <FilterOptions options={info.classes}
          dropdownVisibility={visibilityChecks.classDropdownVisibility}
          assetType="Class" filter={classFilter} />}
      </div>
    </div>
  )
}

export default ResultFilter