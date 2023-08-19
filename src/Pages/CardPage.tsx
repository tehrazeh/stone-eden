import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Card } from "../Redux/data/types";
import { getCard } from "../utils/functions";
import fallbackImg from "../Assets/fallback.png";
import fallbackLazy from "../Assets/lazy.png";
import CardInfo from "../Components/CardPageBlock/CardInfoBlock";
import CardArtBlock from "../Components/CardPageBlock/CardArtBlock";
import CardDescription from "../Components/CardPageBlock/CardDescription";
import { text } from "stream/consumers";

const CardPage = () => {
  const params = useParams();
  const [card, setCard] = useState<Card | undefined>();
  const [loadedCard, setLoadedCard] = useState(false);

  useEffect(() => {
    if (params.id) {
      getCard(params.id).then((res) => {
        setCard((a) => (a = res));
      });
    }
  }, [params.id]);

  if (!card) {
    return (
      <div className="w-full min-h-[85vh] flex justify-center my-20 items-start">
        {/* prettier-ignore  */}
        <FadeLoader color="#36d7b7" height={10} margin={2} radius={2} width={2}
        />
      </div>
    );
  }
  // in case the api does not have an image for the card
  const addCardFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackImg;
  };

  return (
    <div className="bg-zinc-900 min-h-[90vh] flex justify-evenly flex-wrap">
      <p className="font-bold text-slate-200 text-center tracking-wide w-full  text-3xl">
        {card.name}
      </p>
      <div className="flex flex-col justify-between w-[50%] m-2">
        <div className="bg-stone-600/50 flex mb-1 rounded h-full relative">
          <div className="w-[50%] z-10">
            {loadedCard ? null : <img src={fallbackLazy} alt="card" />}
            <img
              className={`${loadedCard ? "w-30" : "hidden"}`}
              src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
              alt="card"
              onError={addCardFallback}
              onLoad={() => {
                setLoadedCard(true);
              }}
            />
          </div>
          {/* prettier-ignore */}
          <CardInfo type={card.type} race={card.race} rarity={card.rarity} playerClass={card.playerClass}/>
        </div>
        <CardDescription
          card={{
            text: card.text,
            cardSet: card.cardSet,
            attack: card.attack,
            health: card.health,
            cost: card.cost,
          }}
        />
      </div>
      <CardArtBlock flavor={card.flavor} cardId={card.cardId} />
    </div>
  );
};

export default CardPage;
