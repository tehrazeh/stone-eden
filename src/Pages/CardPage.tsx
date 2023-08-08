import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Card } from "../Redux/data/types";
import { getCard } from "../utils/functions";

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
  return (
    <div>
      <button
        className="border-2 border-lime-400 rounded text-lime-100"
        onClick={() => history(-1)}
      >
        GO BACK BRO
      </button>
      <p>{params.id}</p>
      {card.cardId}
    </div>
  );
};

export default CardPage;
