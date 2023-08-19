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
    <div className="h-full flex mt-1 p-4 flex-wrap justify-between  bg-stone-600/50 rounded">
      {card.text && (
        <div className="flex w-full bg-zinc-900 justify-center rounded p-2 items-center">
          <img
            src={require("../../../Assets/text.png")}
            className="w-12 mr-4"
            alt="text"
          />
          <p className="text-[20px] text-slate-200">{card.text}</p>
        </div>
      )}
      <div className="w-[45%] rounded flex items-center justify-center bg-zinc-900 mt-2">
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
      {(card.attack || card.health || card.attack) && (
        <div className="w-1/2 mt-2 flex justify-center items-start">
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
