import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Card } from "../Redux/data/types";
import { getCard } from "../utils/functions";
import fallbackImg from "../Assets/fallback.png";
import fallbackLazy from "../Assets/lazy.png";

const CardPage = () => {
  const params = useParams();
  const history = useNavigate();
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
  // in case the api does not have an image for the card
  const addImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackImg;
  };
  return (
    <div className="bg-amber-700 bg-opacity-50 min-h-[90vh] flex justify-evenly flex-wrap">
      <button
        className="border-2 border-lime-400 rounded text-lime-100 absolute mt-1 top-auto left-2"
        onClick={() => history(-1)}
      >
        GO BACK BRO
      </button>
      <p className="font-bold text-amber-200 text-center tracking-wide w-full  text-3xl">
        {card.name}
      </p>
      <div className="bg-slate-800 flex flex-col justify-between w-[50%] m-2">
        <div className="bg-amber-800 bg-opacity-25 flex ">
          <div className="w-[50%]">
            {loaded ? null : <img src={fallbackLazy} alt="card" />}
            <img
              className={`${
                loaded ? "w-30 border-2 border-red-300" : "hidden"
              }`}
              src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
              alt="card"
              onError={addImageFallback}
              onLoad={() => {
                setLoaded(true);
              }}
            />
          </div>
          <div className="flex flex-col bg-red-50 justify-evenly items-center w-[50%]">
            <p>Race: {card.race}</p>
            <p>Type: {card.type}</p>
            <p>Rarity: {card.rarity}</p>
            <p>Extension: {card.cardSet}</p>
            <p>Player Class: {card.playerClass}</p>
          </div>
        </div>
        <div className="bg-amber-500 bg-opacity-25 h-full">
          <p>Attack: {card.attack}</p>
          <p>Health: {card.health}</p>
          <p>Cost: {card.cost}</p>
          <p>Text: {card.text}</p>
        </div>
      </div>

      <div className="bg-stone-900 p-2 rounded-lg h-full m-2">
        <img
          className="w-[100%] max-w-[600px] rounded-lg"
          src={`https://art.hearthstonejson.com/v1/orig/${card.cardId}.png`}
          alt="card art"
        />
      </div>
    </div>
  );
};

export default CardPage;
