import { Info } from "../../Redux/info/types"
import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import { setFilterValue } from "../../Redux/filter/slice"
import { isInfo } from "../../utils/guards"

type FilterProps = {
    type: string
}

// This is component with buttons that represent the main filter for card search, including all
// instances of header sections
const Filter: React.FC<FilterProps> = ({type}) => {

    // get the text of elements to create filter buttons
    const elements = useAppSelector(state => {
        if (isInfo(state.info.info) && type in state.info.info) {
            // thanks !! https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
            return state.info.info[type as keyof Info]
        }
    }) as string[]

    const { filterValue } = useAppSelector(state => state.filter)
    const dispatch = useAppDispatch()

    return (
        <div className="flex flex-wrap justify-center items-center">
            {(elements) ? (elements.filter((item, index) => { // indexOf to return first occurence and filter duplicates
                return elements.indexOf(item) === index
            }).filter((item) => {
                return item.toLowerCase() !== 'enchantment' // temporarily avoid enchantments cause they are baggy
            }).map((item, index) => {
                return <button className={`${(filterValue === item) ? 'button-active' :
                 'button-regular hover:bg-stone-800 bg-stone-700'} 
                        text-emerald-200 w-24 h-[44px] p-x-2 m-1 text-[10px] tracking-wider`}
                    onClick={() => dispatch(setFilterValue(item))}
                    key={index}>{item}
                </button>
            }))
                : <h2>Loading...</h2>}
        </div>
    )
}

export default Filter