import { setAdditionalFilter } from "../../Redux/filter/slice"
import { useAppSelector, useAppDispatch } from "../../utils/hooks"
// import logo from '../../Assets/Attributes'

const OptionalFilter = () => {

  const inputValid = `bg-stone-900 rounded border-2 text-emerald-200 placeholder-emerald-100
  placeholder-opacity-50 p-1 border-solid border-emerald-700 focus:border-emerald-600
  focus:bg-stone-800 focus:outline-none focus:text-emerald-200`

  const inputInvalid = `bg-stone-900 rounded border-2 text-red-200 placeholder-red-100
  placeholder-opacity-50 p-1 border-solid border-red-700 focus:border-red-600
  focus:bg-stone-800 focus:outline-none focus:text-red-200`


  const optionalFilters = useAppSelector(state => state.filter.additionalFilters)
  const dispatch = useAppDispatch()

  const filterInputs = Object.keys(optionalFilters).map(item => {
    return <div key={item} 
    className='flex flex-col wrap relative rounded-sm w-full h-[74px]
    bg-stone-800'>
      <div className="flex w-full justify-evenly absolute top-1">
        <img src={require(`../../Assets/Attributes/${item}.png`)}
            alt='attribute'
            className="w-9 h-11" />
        <input type='text' placeholder={`Enter ${item}...`}
          className={optionalFilters[item as keyof typeof optionalFilters].isValid ? inputValid : inputInvalid}
          value={optionalFilters[item as keyof typeof optionalFilters].value}
          onChange={(e) => {
            dispatch(setAdditionalFilter({
              value: e.target.value,
              filterValue: item as keyof typeof optionalFilters
            }))
          }}
        />
      </div>
      <div className="flex w-full justify-center absolute bottom-0">
      {!optionalFilters[item as keyof typeof optionalFilters].isValid && // input invalid - show tip
        <p className="text-red-400 text-[14px]">Enter valid positive number</p>
      }
      </div>
    </div>
  })
  return (
    <div className="flex w-full h-full flex-col items-center justify-evenly px-[2px]">
      {filterInputs}
    </div>
  )
}

export default OptionalFilter