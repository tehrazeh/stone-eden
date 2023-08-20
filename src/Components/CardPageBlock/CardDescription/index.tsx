import { useState } from "react";
import AttributesBlock from "../../SearchResult/CardBlock/AttributesBlock";

export type CardDescriptionProps = {
  card: {
    text: string | undefined;
    cardSet: string;
    attack: number | undefined;
    health: number | undefined;
    cost: number | undefined;
  };
};

const CardDescription: React.FC<CardDescriptionProps> = ({ card }) => {
  const [artState, setArtState] = useState(true);

  return (
    <div className="h-full mt-1 p-4 grid grid-cols-2 grid-rows-2 bg-stone-600/50 rounded">
      <div className="w-[98%] rounded flex col-span-1 row-span-2 items-center justify-center bg-zinc-900 mr-1">
        {artState ? (
          <img
            // prettier-ignore
            src={`https://images.hearthcard.io/expansions/${card.cardSet.split(" ").join("%20")}.png`}
            className="w-full"
            alt=""
            onError={() => setArtState(false)}
          />
        ) : (
          <>
            <div className="relative h-[40%] w-[33%] flex justify-center items-center group">
              <img
                src={require("../../../Assets/cardSet.png")}
                alt=""
                className="w-14 group-hover:brightness-110"
              />
              <p
                className="absolute bottom-0 rounded bg-stone-700/75 h-4 p-[10px] 
          left-auto hidden group-hover:flex items-center text-slate-200"
              >
                Expansion
              </p>
            </div>
            <p className="text-[20px] text-slate-200">{card.cardSet}</p>
          </>
        )}
      </div>
      <div className="flex w-[98%] bg-zinc-900 justify-center rounded items-center">
        <div className="h-[75%] w-[30%] mx-2 relative flex justify-center items-center group">
          <img
            src={require("../../../Assets/text.png")}
            className="w-12 group-hover:brightness-110"
            alt="text"
          />
          <p
            className="absolute bottom-0 rounded bg-stone-700/75 h-4 p-[10px] 
          left-auto hidden group-hover:flex items-center text-slate-200"
          >
            Description
          </p>
        </div>
        <p className="text-[18px] w-[70%] p-4 text-slate-200">
          {card.text ? card.text : "It speaks for itself"}
        </p>
      </div>

      <div className="w-[98%] mt-2 flex justify-center items-center">
        <AttributesBlock
          attack={card.attack}
          health={card.health}
          cost={card.cost}
        />
      </div>
    </div>
  );
};

export default CardDescription;
