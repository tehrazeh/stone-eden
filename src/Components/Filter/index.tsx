import { Info } from "../../Redux/info/types"
import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import {setFilterType, setFilterValue} from "../../Redux/filter/slice"
import { isInfo } from "../../utils/guards"

type FilterProps = {
    type: string
}

const Filter: React.FC<FilterProps> = (props) => {

    const type = props.type
    const elements = useAppSelector(state => {
        if (isInfo(state.info.info) && type in state.info.info) {
            // thanks !! https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
            return state.info.info[type as keyof Info]
        }
    }) as string[]

    const { filterType, filterValue } = useAppSelector(state => state.filter)
    const dispatch = useAppDispatch()
    const handleFilterClick = (filterName: string) => {
        dispatch(setFilterValue(filterName))
        dispatch(setFilterType(type))
    }

    return (
        <div className="flex flex-wrap justify-center items-center">
            {(elements) ? (elements.filter((item, index) => { // indexOf to return first occurence and filter duplicates
                return elements.indexOf(item) === index}).map((item, index) => {
                return <button className={`${(filterValue === item) ? 'button-active' : 'button-regular'} 
                        text-emerald-200 w-28 h-20 p-x-2 m-1 text-[14px] hover:scale-105`}
                        onClick={() => handleFilterClick(item)}
                        key={index}>{item}
                       </button>
            }))
                : <h2>Loading...</h2>}
                {/* <p>{filterType}</p>
                <p>{filterValue}</p> */}
        </div>
    )
}

export default Filter