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
            // someObj[field as keyof ObjectType]
            return state.info.info[type as keyof Info]
        }
    }) as string[]
    return (
        <>
            {(elements) ? (elements.map((item, index) => {
                return <div key={index}>{item}</div>
            }))
                : <h2>Loading...</h2>}
        </>
    )
}

export default Filter