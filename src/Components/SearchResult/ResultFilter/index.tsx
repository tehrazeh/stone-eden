import Options from "./Options";
import DropdownButton from "./DropdownButton";
import { useAppSelector } from "../../../utils/hooks";

const ResultFilter = () => {
  const {sortFilter, isDropdownVisible} = useAppSelector(state => state.dataFilter)
  return (
    <div className="bg-neutral-900 text-lg border-solid border-2
     border-neutral-600 w-full flex flex-col items-center rounded">
        <DropdownButton filter={sortFilter} dropdownVisibility={isDropdownVisible} assetType="Attributes"/>
        <Options/>
    </div>
  )
}

export default ResultFilter