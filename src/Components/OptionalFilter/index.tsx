import { useAppSelector } from "../../utils/hooks"
import OptionalFilterBlock from "./OptionalFilterBlock"

const OptionalFilter = () => {

  // get the list of optiol filters
  const optionalFilters = useAppSelector(state => state.filter.additionalFilters)

  // map over optional filters keys and return filter blocks
  const filterInputs = Object.keys(optionalFilters).map(item => {
    return <OptionalFilterBlock optionalFilters={optionalFilters} item={item as keyof typeof optionalFilters} />
  })
  return (
    <div className="flex w-full h-full flex-col items-center justify-evenly px-[2px]">
      {filterInputs}
    </div>
  )
}

export default OptionalFilter