import { useAppSelector } from "../../utils/hooks"

type FilterProps = {
  type: string
}
const Filter:React.FC<FilterProps> = (props) => {

  // const type = 'classes'
  const type = props.type
  // const elements = useAppSelector(state => {
  //   if (type in state.info.info) {
  //     return state.info.info[type]
  //   }
  // })

  return (
    <>
    {/* {(elements) ? (elements.map((item, index) => { 
      return <div key={index}>{item}</div>}))
       : <h2>Loading...</h2>} */}
       <p>{type}</p>
    </>
  )
}

export default Filter