import { useAppSelector } from "../../utils/hooks"

const activeClass = `bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
border-solid border-2 rounded shadow-inner shadow-yellow-700
hover:bg-yellow-800 hover:border-yellow-500 hover:text-yellow-500`

const disabledClass = `bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
border-solid border-2 rounded shadow-inner shadow-yellow-700 opacity-50 cursor-auto`

const SearchBlock = () => {
    const {filterValue, isValid, filterType} = useAppSelector(state => state.filter)
    return (
        <div>
            {/* 
            1.fix the isValid to react immediately, not after 1 change
            2.fix tip for filtervalue to display filterType
             */}
            {!isValid && <p>Invalid input for filters</p>}
            {filterValue.length <= 0 && <p>Select <b>{filterType.toUpperCase()}</b> option</p>}
        <button className={(isValid && filterValue.length > 0) ? activeClass : disabledClass}>
            Search
        </button>
        </div>
    )
}

export default SearchBlock