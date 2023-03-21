import Options from "./Options";
import DropdownButton from "./DropdownButton";

const ResultFilter = () => {

  return (
    <div className="bg-neutral-900 text-lg border-solid border-2
     border-neutral-600 w-[95%] flex flex-col items-center rounded">
        <DropdownButton/>
        <Options/>
    </div>
  )
}

export default ResultFilter