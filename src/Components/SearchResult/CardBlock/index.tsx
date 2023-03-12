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
      <p className={textClass}>{(props.card.playerClass || '')  + ' ' + props.card.type}</p>
      <div className="bg-slate-800 w-[90%] grid grid-cols-3 grid-rows-1">
        {/* <p className={textClass}><i>attack {props.card.attack}</i></p> */}
        {/* <div className="bg-green-800 flex justify-center relative">
          <img src={require(`../../../Assets/Attributes/attack.png`)} className='w-12 brightness-50' alt='attack'/>
          <p className="absolute text-[32px] shadow-2xl shadow-black text-blue-100 top-1.5 right-6">
            {props.card.attack}
          </p>
        </div>
        <div className="bg-green-800 flex justify-center relative">
          <img src={require(`../../../Assets/Attributes/health.png`)} className='w-12 h-10 brightness-50' alt='health'/>
          <p className="absolute text-[32px] shadow-2xl shadow-black text-blue-100 top-1.5 right-6">
          {props.card.health}
          </p>
        </div>
        <div className="bg-green-800 flex justify-center relative">
          <img src={require(`../../../Assets/Attributes/cost.png`)} className='w-12 brightness-50' alt='cost'/>
          <p className="absolute text-[32px] shadow-2xl shadow-black text-blue-100 top-1.5 right-6">
          {props.card.cost}
          </p>
        </div> */}
      </div>
      <img className='w-56 rounded align-middle p-0 m-0 hover:brightness-110 hover:cursor-pointer' 
      src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`} alt='card'
      onError={addImageFallback}/>
    </div>
  )
}

export default CardBlock