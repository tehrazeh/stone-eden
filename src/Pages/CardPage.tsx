import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardPage = () => {
  const params = useParams();
  const history = useNavigate();
  console.log(params);
  return (
    <div>
      <button
        className="border-2 border-lime-400 rounded text-lime-100"
        onClick={() => history(-1)}
      >
        GO BACK BRO
      </button>
      <p>{params.id}</p>
    </div>
  );
};

export default CardPage;
