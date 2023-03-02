import { SyntheticEvent } from "react";
import { Card } from "../../../Redux/data/types"
import fallBackImg from "../../../Assets/fallback.png"
type CardProps = {
  card: Card
}

const textClass = 'text-base text-emerald-200 opacity-85 tracking-wider'

const CardBlock: React.FC<CardProps> = (props) => {

  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallBackImg;
  };
  return (
    <div className='border-solid border-2 border-neutral-600 bg-neutral-800 rounded flex justify-center items-center flex-col w-64
         m-2'>
      <p className={textClass}><i>{props.card.name}</i></p>
      <p className={textClass}><i>attack {props.card.attack}</i></p>
      <p className={textClass}><i>health {props.card.health}</i></p>
      <p className={textClass}><i>cost {props.card.cost}</i></p>
      <p className={textClass}>{(props.card.playerClass || '')  + ' ' + props.card.type}</p>
      <img className='w-56 rounded align-middle p-0 m-0 hover:brightness-110 hover:cursor-pointer' 
      src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`} alt='card'
      onError={addImageFallback}/>
    </div>
  )
}

export default CardBlock