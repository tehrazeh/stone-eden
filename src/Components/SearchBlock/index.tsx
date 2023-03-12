import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import { useSearchParams } from "react-router-dom"
import { setAdditionalFilter, setFilterValue } from "../../Redux/filter/slice"
import { useEffect } from "react"
import { Params } from "../../Redux/filter/types"
import { fetchData } from "../../Redux/data/asyncActions"
import { setCurrentPage } from "../../Redux/pagination/slice"
import { setDataFilter } from "../../Redux/datafilter/slice"
import { DataSort } from "../../Redux/datafilter/types"
import WarningBlock from "./warningBlock"


const activeClass = `bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
border-solid border-2 rounded shadow-inner shadow-yellow-700
hover:bg-yellow-800 hover:border-yellow-500 hover:text-yellow-500`

const disabledClass = `bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
border-solid border-2 rounded shadow-inner shadow-yellow-700 opacity-50 cursor-auto`

const SearchBlock = () => {
    const { filterValue, filterType, additionalFilters } = useAppSelector(state => state.filter)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    // TRY TO FIND BETTER SOLUTION THAN ITERATING THROUGH OBJECT WITH 4 KEYS FOR EVERY RERENDER
    let filterKey: keyof typeof additionalFilters
    let isInputsValid = true
    for (filterKey in additionalFilters) {
        if (!additionalFilters[filterKey].isValid) {
            isInputsValid = false
        }
    }

    useEffect(() => {
        // if filtervalue is empty, we set up the selected option from link
        if (filterValue === '') {
            dispatch(setFilterValue(searchParams.get('value') || ''))  
        }

        // we check and set up additional filters if there are some
        if (searchParams.has('value')) {
            for (const [key, value] of Array.from(searchParams.entries())) {
                if (key !== 'value') {
                    dispatch(setAdditionalFilter({filterValue: key as keyof typeof additionalFilters, value}))
                }
            }
        }
    }, [])

    const handleClick = () => {
        const params: Params = {
            value: filterValue,
        }
        for (filterKey in additionalFilters) {
            if (additionalFilters[filterKey].value !== '') {
                params[filterKey] = additionalFilters[filterKey].value.toString()
            }
        }
        setSearchParams(params)
        params.type = filterType
        dispatch(fetchData(params)) // fetch data from api
        dispatch(setCurrentPage(1)) // set 1st page by default
        dispatch(setDataFilter(DataSort.DEFAULT)) // reset sort filters
    }
    return (
        <div className=" w-full grid grid-cols-3 h-24 grid-rows-1">
            <div className="bg-zinc-900 flex justify-center items-center">
                {!isInputsValid && 
                <WarningBlock text='Invalid input for filters'/>}
            </div>
            <div className="bg-zinc-800 flex justify-center items-center">
                <button className={(isInputsValid && filterValue.length > 0) ? activeClass : disabledClass}
                        onClick={handleClick}
                        disabled={!(isInputsValid && filterValue.length > 0)}
                >
                    Search
                </button>
            </div>
            <div className="bg-zinc-900 flex justify-center items-center">
                {filterValue.length <= 0 && 
                <WarningBlock text={`Select ${filterType.toUpperCase()} option`}/>}
            </div>
        </div>
    )
}

export default SearchBlock