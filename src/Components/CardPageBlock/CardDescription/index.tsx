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
            <img
              src={require("../../../Assets/cardSet.png")}
              alt=""
              className="w-14 mr-2"
            />
            <p className="text-[20px] text-slate-200">{card.cardSet}</p>
          </>
        )}
      </div>
      {card.text && (
        <div className="flex w-[98%] bg-zinc-900 ml-1 justify-center rounded p-2 items-center">
          <img
            src={require("../../../Assets/text.png")}
            className="w-12 mr-4"
            alt="text"
          />
          <p className="text-[20px] text-slate-200">{card.text}</p>
        </div>
      )}
      {(card.attack || card.health || card.attack) && (
        <div className="w-[98%] mt-2 ml-1 flex justify-center items-center">
          <AttributesBlock
            attack={card.attack}
            health={card.health}
            cost={card.cost}
          />
        </div>
      )}
    </div>
  );
};

export default CardDescription;
