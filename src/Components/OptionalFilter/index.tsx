
import { useAppSelector } from "../../utils/hooks"


const OptionalFilter = () => {

  const optionalFilters = useAppSelector(state => Object.keys(state.filter.additionalFilters))
  const inputStyle = `bg-stone-900 rounded border-2 text-emerald-200 placeholder-emerald-100
  placeholder-opacity-50 p-1 border-solid border-emerald-700 m-2 focus:border-emerald-600
  focus:bg-stone-800 focus:outline-none focus:text-emerald-200`

  const filterInputs = optionalFilters.map(item => {
    return <input type='text' key={item} placeholder={`Enter ${item}...`}   
    className={inputStyle}
    />
  })

  return (
    <>
    {filterInputs}
    </>
  )
}

export default OptionalFilter