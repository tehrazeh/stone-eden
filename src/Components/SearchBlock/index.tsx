import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import { useSearchParams } from "react-router-dom"
import { setAdditionalFilter, setFilterValue } from "../../Redux/filter/slice"
import { useEffect } from "react"
import { Params } from "../../Redux/filter/types"

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
            dispatch(setFilterValue(searchParams.get('type') || ''))  
        }

        // we check and set up additional filters if there are some
        if (searchParams.has('type')) {
            for (const [key, value] of Array.from(searchParams.entries())) {
                if (key !== 'type') {
                    dispatch(setAdditionalFilter({filterType: key as keyof typeof additionalFilters, value}))
                }
            }
        }
    }, [])

    const handleClick = () => {
        const params: Params = {
            type: filterValue,
        }
        for (filterKey in additionalFilters) {
            if (additionalFilters[filterKey].value !== '') {
                params[filterKey] = additionalFilters[filterKey].value.toString()
            }
        }
        setSearchParams(params)
    }
    return (
        <div>
            {!isInputsValid && <p>Invalid input for filters</p>}
            {filterValue.length <= 0 && <p>Select <b>{filterType.toUpperCase()}</b> option</p>}
            <button className={(isInputsValid && filterValue.length > 0) ? activeClass : disabledClass}
                    onClick={handleClick}
            >
                Search
            </button>
        </div>
    )
}

export default SearchBlock