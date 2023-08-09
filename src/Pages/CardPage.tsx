import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Card } from "../Redux/data/types";
import { getCard } from "../utils/functions";
import fallbackImg from "../Assets/fallback.png";

const CardPage = () => {
  const params = useParams();
  const history = useNavigate();
  const [card, setCard] = useState<Card | undefined>();
  useEffect(() => {
    if (params.id) {
      getCard(params.id).then((res) => {
        setCard((a) => (a = res));
      });
    }
  }, [params.id]);

  console.log(card);

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
    <div>
      <button
        className="border-2 border-lime-400 rounded text-lime-100"
        onClick={() => history(-1)}
      >
        GO BACK BRO
      </button>
      <div>
        <img
          src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
          alt="card"
          onError={addImageFallback}
        />
      </div>
    </div>
  );
};

export default CardPage;
