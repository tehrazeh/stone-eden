import { SyntheticEvent } from "react";
import { Card } from "../../../Redux/data/types"
import fallBackImg from "../../../Assets/fallback.png"
type CardProps = {
  card: Card
}

const textClass = 'text-base text-emerald-200 opacity-85 tracking-wider'

const CardBlock: React.FC<CardProps> = (props) => {

  const attributes = ['attack', 'health', 'cost']

  const attributesBlocks = attributes.map(attribute => {
      return <div className="flex justify-center items-center relative">
      <img src={require(`../../../Assets/Attributes/${attribute}.png`)} className='w-14 h-12 brightness-50' alt='attack'/>
      <p className="absolute text-[30px] font-bold shadow-zinc-900 text-emerald-100 top-auto right-auto">
        {props.card[attribute as keyof Card]}
      </p>
    </div>
  })
  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallBackImg;
  };
  return (
    <div className='border-solid border-2 border-neutral-600 bg-neutral-800 rounded flex justify-center items-center flex-col w-64
         m-2'>
      <p className={textClass}><i>{props.card.name}</i></p>
      <p className={textClass}>{(props.card.playerClass || '')  + ' ' + props.card.type}</p>
      <div className=" mt-2 w-[70%] bg-zinc-900 rounded h-14 grid grid-cols-3 grid-rows-1">
        {attributesBlocks}
      </div>
      <img className='w-56 rounded align-middle p-0 m-0 hover:brightness-110 hover:cursor-pointer' 
      src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`} alt='card'
      onError={addImageFallback}/>
    </div>
  )
}

export default CardBlock