import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Card } from "../Redux/data/types";
import { getCard } from "../utils/functions";
import fallbackImg from "../Assets/fallback.png";
import fallbackLazy from "../Assets/lazy.png";
import fallbackArt from "../Assets/artFallback.png";
import AttributesBlock from "../Components/SearchResult/CardBlock/AttributesBlock";
import CardInfo from "../Components/CardPageBlock/CardInfoBlock";

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
        <FadeLoader
          color="#36d7b7"
          height={10}
          margin={2}
          radius={2}
          width={2}
        />
      </div>
    );
  }
  // in case the api does not have an image for the card
  // do the function composition or something
  const addCardFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackImg;
  };
  const addArtFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackArt;
    event.currentTarget.className = "w-[100%] max-w-[600px]";
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
          <CardInfo
            type={card.type}
            race={card.race}
            rarity={card.rarity}
            playerClass={card.playerClass}
          />
        </div>
        <div className="h-full flex mt-1 p-4 flex-wrap justify-between  bg-stone-600/50 rounded">
          {card.text && (
            <div className="flex w-full bg-zinc-900 rounded p-2 items-center">
              <img
                src={require("../Assets/text.png")}
                className="w-12 mr-2"
                alt="text"
              />
              <p className="text-[20px] text-slate-200">{card.text}</p>
            </div>
          )}
          <div className="w-[45%] rounded bg-zinc-900 mt-2">
            <img
              // prettier-ignore
              src={`https://images.hearthcard.io/expansions/${card.cardSet.split(" ").join("%20")}.png`}
              className="w-full"
              alt=""
            />
          </div>
          <div className="w-1/2 mt-2 flex justify-center items-start">
            <AttributesBlock
              attack={card.attack}
              health={card.health}
              cost={card.cost}
            />
          </div>
        </div>
      </div>

      <div className="bg-stone-600/50 p-2 rounded h-full max-w-[620px] w-1/2 m-2 flex flex-col items-center">
        <img
          className="w-[100%] max-w-[600px] rounded-lg"
          src={`https://art.hearthstonejson.com/v1/orig/${card.cardId}.png`}
          alt="card art"
          onError={addArtFallback}
        />
        {card.flavor && (
          <div className="flex justify-center items-center my-2 bg-zinc-900 rounded-lg p-1">
            <img
              src={require("../Assets/text.png")}
              className="w-12 mr-2  "
              alt="text"
            />
            <p className="text-[20px] text-slate-200">{card.flavor}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPage;
