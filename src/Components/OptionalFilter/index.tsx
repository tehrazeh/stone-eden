import { setAdditionalFilter } from "../../Redux/filter/slice"
import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import {useState} from 'react'


const OptionalFilter = () => {

  const inputValid = `bg-stone-900 rounded border-2 text-emerald-200 placeholder-emerald-100
  placeholder-opacity-50 p-1 border-solid border-emerald-700 m-2 focus:border-emerald-600
  focus:bg-stone-800 focus:outline-none focus:text-emerald-200`

  const inputInvalid = `bg-stone-900 rounded border-2 text-red-200 placeholder-red-100
  placeholder-opacity-50 p-1 border-solid border-red-700 m-2 focus:border-red-600
  focus:bg-stone-800 focus:outline-none focus:text-red-200`

  
  const optionalFilters = useAppSelector(state => state.filter.additionalFilters)
  const dispatch = useAppDispatch()

   // function that checks if input is valid
   // maybe move this function to slice and check the validity there...
   // or create usestate here to check validity quickly
   const isInputValid = (item: string) => {
    return (!isNaN(optionalFilters[item as keyof typeof optionalFilters] as any) &&
    optionalFilters[item as keyof typeof optionalFilters] >= 0) 
   }

  const filterInputs = Object.keys(optionalFilters).map(item => {
    return <div key={item}><input type='text' placeholder={`Enter ${item}...`}   
    className={isInputValid(item) ? inputValid: inputInvalid}
    value={optionalFilters[item as keyof typeof optionalFilters]}
    onChange={(e) => {dispatch(setAdditionalFilter({value: e.target.value,
      filterType: item as keyof typeof optionalFilters, isValid: isInputValid(item)}))
    }}
    />
    {!isInputValid(item) && // input invalid - show tip
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