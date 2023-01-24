import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import { useSearchParams } from "react-router-dom"
import { setFilterValue } from "../../Redux/filter/slice"
import { useEffect } from "react"

const activeClass = `bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
border-solid border-2 rounded shadow-inner shadow-yellow-700
hover:bg-yellow-800 hover:border-yellow-500 hover:text-yellow-500`

const disabledClass = `bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
border-solid border-2 rounded shadow-inner shadow-yellow-700 opacity-50 cursor-auto`

const SearchBlock = () => {
    const { filterValue, filterType, additionalFilters } = useAppSelector(state => state.filter)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    const searchQuery = searchParams.get('type') || ''

    useEffect(() => {
        if (filterValue === '') {
            dispatch(setFilterValue(searchQuery))  
        }
    }, [filterValue, dispatch, searchQuery])

    // TRY TO FIND BETTER SOLUTION THAN ITERATING THROUGH OBJECT WITH 4 KEYS FOR EVERY RERENDER
    let key: keyof typeof additionalFilters
    let isInputsValid = true
    for (key in additionalFilters) {
        if (!additionalFilters[key].isValid) {
            isInputsValid = false
        }
    }

    const handleClick = () => {
        setSearchParams({
            type: filterValue
        })
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