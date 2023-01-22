import { setAdditionalFilter } from "../../Redux/filter/slice"
import { useAppSelector, useAppDispatch } from "../../utils/hooks"

const OptionalFilter = () => {

  const inputValid = `bg-stone-900 rounded border-2 text-emerald-200 placeholder-emerald-100
  placeholder-opacity-50 p-1 border-solid border-emerald-700 m-2 focus:border-emerald-600
  focus:bg-stone-800 focus:outline-none focus:text-emerald-200`

  const inputInvalid = `bg-stone-900 rounded border-2 text-red-200 placeholder-red-100
  placeholder-opacity-50 p-1 border-solid border-red-700 m-2 focus:border-red-600
  focus:bg-stone-800 focus:outline-none focus:text-red-200`

  
  const optionalFilters = useAppSelector(state => state.filter.additionalFilters)
  const dispatch = useAppDispatch()

  const filterInputs = Object.keys(optionalFilters).map(item => {
    return <div key={item}><input type='text' placeholder={`Enter ${item}...`}   
    className={optionalFilters[item as keyof typeof optionalFilters].isValid ? inputValid: inputInvalid}
    value={optionalFilters[item as keyof typeof optionalFilters].value}
    onChange={(e) => {dispatch(setAdditionalFilter({value: e.target.value,
      filterType: item as keyof typeof optionalFilters}))
    }}
    />
    {!optionalFilters[item as keyof typeof optionalFilters].isValid && // input invalid - show tip
    <p className="text-red-400 text-[14px]">Enter valid positive number</p>}
    </div>
  })
  return (
    <>
    {filterInputs}
    </>
  )
}

export default OptionalFilter