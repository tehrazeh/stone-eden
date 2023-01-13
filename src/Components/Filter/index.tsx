import { Info } from "../../Redux/info/types"
import { useAppSelector } from "../../utils/hooks"

type FilterProps = {
    type: string
}

const Filter: React.FC<FilterProps> = (props) => {

    // guard to check that we have info and not empty object
    function isInfo(infoObj: {} | Info): infoObj is Info {
        return (infoObj as Info).classes !== undefined || ('classes' in infoObj)
    }

    const type = props.type
    const elements = useAppSelector(state => {
        if (isInfo(state.info.info) && type in state.info.info) {
            // thanks !! https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
            return state.info.info[type as keyof Info]
        }
    }) as string[]
    return (
        <div className="flex flex-wrap justify-center items-center">
            {(elements) ? (elements.map((item, index) => {
                return <button className="button-regular text-emerald-200 h-12 p-x-2 m-1 text-[11px]
                        hover:scale-105"
                        key={index}>{item}
                       </button>
            }))
                : <h2>Loading...</h2>}
        </div>
    )
}

export default Filter