import { useAppSelector } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
const ResultBlock = () => {
    const {data} = useAppSelector((state) => state.data)
    const cards = data.map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  return (
    <div className='bg-slate-500 w-full flex flex-wrap justify-center items-center'>
        {cards}
    </div>
  )
}

export default ResultBlock