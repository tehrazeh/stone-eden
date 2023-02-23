import { SyntheticEvent } from "react";
import { Card } from "../../../Redux/data/types"
import fallBackImg from "../../../Assets/fallback.png"
type CardProps = {
  card: Card
}

const textClass = 'text-lg text-emerald-200 opacity-85 m-1 tracking-wider'

const CardBlock: React.FC<CardProps> = (props) => {

  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallBackImg;
  };
  return (
    <div className='border-solid border-2 border-neutral-600 bg-neutral-800 rounded flex justify-center items-center flex-col w-64
         m-2'>
      <p className={textClass}><b>{props.card.name}</b></p>
      <p className={textClass}>{(props.card.playerClass || '')  + ' ' + props.card.type}</p>
      <img className='w-52 rounded align-middle p-0 m-0' 
      src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`} alt='card'
      onError={addImageFallback}/>
    </div>
  )
}

export default CardBlock