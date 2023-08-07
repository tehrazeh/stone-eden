import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    return <p>Loading...</p>;
  }

  console.log(card);
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
