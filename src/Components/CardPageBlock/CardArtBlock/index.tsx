import { SyntheticEvent, useState } from "react";
import fallbackArt from "../../../Assets/artFallback.png";

export type ArtBlocksProps = {
  cardId: string;
  flavor: string | undefined;
};

const CardArtBlock: React.FC<ArtBlocksProps> = (props) => {
  const [loaded, setLoaded] = useState(false);

  const addArtFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackArt;
    event.currentTarget.className = "w-[100%] max-w-[600px]";
  };

  return (
    <div className="bg-stone-600/50 p-2 rounded h-full min-h-[90vh] max-w-[620px] w-1/2 m-2 flex flex-col items-center">
      {!loaded && (
        <img
          className="w-full"
          src={require("../../../Assets/artLazyFallback.png")}
          alt=""
        />
      )}
      <img
        className={`${
          loaded ? "" : "hidden"
        } w-[100%] max-w-[600px] rounded-lg`}
        src={`https://art.hearthstonejson.com/v1/orig/${props.cardId}.png`}
        alt="card art"
        onError={addArtFallback}
        onLoad={() => setLoaded(true)}
      />
      {props.flavor && (
        <div className="flex justify-center items-center my-2 bg-zinc-900 rounded-lg p-1">
          <img
            src={require("../../../Assets/text.png")}
            className="w-12 mr-2  "
            alt="text"
          />
          <p className="text-[20px] text-slate-200">{props.flavor}</p>
        </div>
      )}
    </div>
  );
};

export default CardArtBlock;
