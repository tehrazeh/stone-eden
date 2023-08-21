import { SyntheticEvent, useState } from "react";
import { Card } from "../../../Redux/data/types";
import fallBackImg from "../../../Assets/fallback.png";
import lazyImg from "../../../Assets/lazy.png";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import AttributesBlock from "./AttributesBlock";

type CardProps = {
  card: Card;
};

const textClass = "text-base text-emerald-200 opacity-85 mb-1 tracking-wider";

const CardBlock: React.FC<CardProps> = (props) => {
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const regularClass = `w-56 rounded align-middle p-0 m-0 scale-105
   hover:brightness-125 hover:scale-[110%] hover:cursor-pointer transition-all`;

  // in case the api does not have an image for the card
  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallBackImg;
  };
  return (
    <div
      ref={ref}
      className="border-solid border-2 border-neutral-600 bg-neutral-800 rounded 
    flex justify-between items-center flex-col w-64 my-[4px] mx-[2px]"
    >
      <div className="w-full flex justify-center flex-col items-center">
        <p className={textClass}>
          <i>{props.card.name}</i>
        </p>
        <p className={textClass}>
          {(props.card.playerClass || "") + " " + props.card.type}
        </p>
        <AttributesBlock
          attack={props.card.attack}
          health={props.card.health}
          cost={props.card.cost}
        />
      </div>
      <div className="w-[90%] h-full mt-6 flex justify-center items-center">
        {/* thanks! https://stackoverflow.com/questions/37312122/how-to-do-a-nested-if-else-statement-in-reactjs-jsx */}
        {inView ? (
          <>
            {loaded ? null : ( // image not loaded ? show skeleton
              <img className={regularClass} src={lazyImg} alt="card" />
            )}
            <Link to={`/card/${props.card.cardId}`}>
              <img
                className={loaded ? regularClass : `hidden`} // show image only when its fully loaded
                src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.card.cardId}.png`}
                alt="card"
                onError={addImageFallback}
                onLoad={() => {
                  setLoaded(true);
                }}
              />
            </Link>
          </>
        ) : (
          <img className={regularClass} src={lazyImg} alt="card" />
        )}
      </div>
    </div>
  );
};

export default CardBlock;
