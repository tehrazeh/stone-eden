import { useAppSelector } from "../../../utils/hooks"
const ClassFilter = () => {

  const classes = useAppSelector(state => {
    if ('classes' in state.info.info) {
      return state.info.info.classes
    }
  })

  return (
    <>
    {(classes) ? (classes.map((item, index) => { 
      return <div key={index}>{item}</div>}))
       : <h2>Loading...</h2>}
    </>
  )
}

export default ClassFilter