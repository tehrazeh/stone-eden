import { SyntheticEvent } from "react";
import { Card } from "../../../Redux/data/types"

type CardProps = {
  card: Card
}

const CardBlock: React.FC<CardProps> = (props) => {

  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = 'https://art.hearthstonejson.com/v1/256x/EX1_001.jpg';
  };
  return (
    <div className='border-solid border-2 border-red-400 rounded flex justify-center items-center flex-col p-4 w-64
         m-4'>
      <p>{props.card.name}</p>
      <p>{props.card.type}</p>
      {/* <img className='w-40 h-40 rounded' 
      src={`https://art.hearthstonejson.com/v1/256x/${props.card.cardId}.jpg`} alt='card'
      onError={addImageFallback}/> */}
      <img className='w-40 rounded' 
      src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`} alt='card'
      onError={addImageFallback}/>
    </div>
  )
}

export default CardBlock