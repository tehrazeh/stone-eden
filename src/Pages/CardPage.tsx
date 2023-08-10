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

  console.log(card);
  return (
    <div>
      <button
        className="border-2 border-lime-400 rounded text-lime-100"
        onClick={() => history(-1)}
      >
        GO BACK BRO
      </button>
      <div className="w-full bg-amber-500 bg-opacity-50 min-h-[90vh] flex justify-center items-center">
        <div>
          <div>
            {loaded ? null : <img src={fallbackLazy} alt="card" />}
            <img
              className={`${loaded ? "w-30" : "hidden"}`}
              src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
              alt="card"
              onError={addImageFallback}
              onLoad={() => {
                setLoaded(true);
              }}
            />
          </div>
          <div>
            <p>Attack: {card.attack}</p>
            <p>Health: {card.health}</p>
            <p>Cost: {card.cost}</p>
            <p>Text: {card.text}</p>
            <p>Race: {card.race}</p>
            <p>Type: {card.type}</p>
            <p>{card.name}</p>
            <p>Rarity: {card.rarity}</p>
            <p>Player Class: {card.playerClass}</p>
          </div>
        </div>
        <div>
          <img
            src={`https://art.hearthstonejson.com/v1/orig/${card.cardId}.png`}
            alt="card art"
          />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
