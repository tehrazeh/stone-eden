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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (params.id) {
      getCard(params.id).then((res) => {
        setCard((a) => (a = res));
      });
    }
  }, [params.id]);

  if (!card) {
    return (
      <div className="w-full min-h-[85vh] flex justify-center items-start">
        <FadeLoader
          color="#36d7b7"
          height={40}
          margin={60}
          radius={20}
          width={10}
        />
      </div>
    );
  }
  // console.log(
  //   `https://images.hearthcard.io/expansions/${card.cardSet
  //     .split(" ")
  //     .join("%20")}.png`
  // );
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
    <div className="bg-zinc-700 min-h-[90vh] flex justify-evenly flex-wrap">
      <p className="font-bold text-slate-200 text-center tracking-wide w-full  text-3xl">
        {card.name}
      </p>
      <div className=" flex flex-col justify-between w-[50%] m-2">
        <div className="bg-opacity-25 flex m-1 bg-slate-300 rounded">
          <div className="w-[50%]">
            {loaded ? null : <img src={fallbackLazy} alt="card" />}
            <img
              className={`${loaded ? "w-30" : "hidden"}`}
              src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
              alt="card"
              onError={addCardFallback}
              onLoad={() => {
                setLoaded(true);
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
        <div className="h-full flex justify-evenly m-1 flex-col items-center bg-slate-300 bg-opacity-25 rounded">
          <AttributesBlock
            attack={card.attack}
            health={card.health}
            cost={card.cost}
          />
          {card.text && (
            <div className="flex justify-center w-[90%] items-center">
              <img
                src={require("../Assets/text.png")}
                className="w-12"
                alt="text"
              />
              <p className="text-[20px] text-slate-200">{card.text}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-stone-800 p-2 rounded-lg h-full m-2 flex flex-col items-center">
        <img
          className="w-[100%] max-w-[600px] rounded-lg"
          src={`https://art.hearthstonejson.com/v1/orig/${card.cardId}.png`}
          alt="card art"
          onError={addArtFallback}
        />
        <div className="text-[20px] text-slate-200">{card.flavor}</div>
      </div>
    </div>
  );
};

export default CardPage;
