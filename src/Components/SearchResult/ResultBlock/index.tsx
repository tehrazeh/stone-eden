import { useAppSelector } from "../../../utils/hooks"
import CardBlock from "../CardBlock"
const ResultBlock = () => {
    const {data} = useAppSelector((state) => state.data)
    const cards = data.filter((element, index, arr) => 
    arr.findIndex(element2 => (element2.name===element.name)) === index).filter((item) => {
      return item.type.toLowerCase() !== 'enchantment' // temporarily avoid enchantments cause they are baggy
    }).map((element, index) => {
      return <CardBlock key={index} card={element} />
    })
  return (
    <div className='bg-slate-500 w-full flex flex-wrap justify-center items-center'>
        {cards}
    </div>
  )
}

export default ResultBlock