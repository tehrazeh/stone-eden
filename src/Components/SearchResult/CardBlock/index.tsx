import { SyntheticEvent, useState } from "react";
import { Card } from "../../../Redux/data/types"
import fallBackImg from "../../../Assets/fallback.png"
import lazyImg from "../../../Assets/lazy.png"
import { useInView } from "react-intersection-observer";

type CardProps = {
  card: Card
}

const textClass = 'text-base text-emerald-200 opacity-85 tracking-wider'

const CardBlock: React.FC<CardProps> = (props) => {

  const attributes = ['attack', 'health', 'cost'] // attributes that are displayed on card
  const attributesBlocks = attributes.map(attribute => {
    return <div className="flex justify-center items-center relative" key={attribute}>
      <img src={require(`../../../Assets/attribute/${attribute}.png`)} className='w-14 h-12 brightness-50' alt='attack' />
      <p className="absolute text-[38px] font-bold shadow-zinc-900 opacity-80 text-slate-100 top-auto right-auto">
        {props.card[attribute as keyof Card]}
      </p>
    </div>
  })

  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  const regularClass = `w-56 rounded align-middle p-0 m-0 hover:brightness-110 hover:cursor-pointer transition-all`

  // in case the api does not have an image for the card
  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallBackImg;
  };
  return (
    <div ref={ref}
      className='border-solid border-2 border-neutral-600 bg-neutral-800 rounded 
    flex justify-between items-center flex-col w-64 my-[4px] mx-[2px]'>
      <div className="w-full flex justify-center flex-col items-center">
        <p className={textClass}><i>{props.card.name}</i></p>
        <p className={textClass}>{(props.card.playerClass || '') + ' ' + props.card.type}</p>
        <div className=" mt-2 w-[90%] bg-zinc-900 rounded h-14 grid grid-cols-3 grid-rows-1">
          {attributesBlocks}
        </div>
      </div>
      <div className="w-[90%] h-full flex justify-center items-center">
        {/* thanks! https://stackoverflow.com/questions/37312122/how-to-do-a-nested-if-else-statement-in-reactjs-jsx */}
        {inView ? 
          <>{ loaded // image not loaded ? show skeleton
              ? null        
              : <img className={regularClass} src={lazyImg} alt='card' />
            }
            <img className={loaded ? regularClass : `hidden`} // show image only when its fully loaded
                  src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`} alt='card'
                  onError={addImageFallback} onLoad={() => {
                    setLoaded(true) 
                  }}/>
          </>
          : <img className={regularClass} src={lazyImg} alt='card' />
        }
      </div>
    </div>
  )
}

export default CardBlock