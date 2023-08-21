import { optionCheck } from "../../../utils/functions";

export type CardInfoProps = {
  type: string | undefined;
  race: string | undefined;
  rarity: string | undefined;
  playerClass: string | undefined;
};

const CardInfo: React.FC<CardInfoProps> = (props) => {
  const cardInfoBlock = `bg-stone-800 bg-opacity-[65%] p-1 h-[22%] rounded w-[90%] flex
   justify-evenly items-center text-[20px] text-slate-200`;

  const getImageInfoBlock = (imageType: string) => {
    const imageBlockTypes = {
      withFallback: ["type", "playerClass", "rarity"],
      withText: ["race"],
    };
    if (imageBlockTypes.withFallback.includes(imageType)) {
      return (
        <div className="w-1/2 flex justify-center rounded-[34px] items-center group relative">
          <img
            className="w-full m-auto group-hover:scale-[102%] group-hover:brightness-50"
            src={
              optionCheck(imageType).includes(
                // @ts-ignore
                props[imageType as keyof CardInfoProps]
                  .toLowerCase()
                  .split(" ")
                  .join("")
              )
                ? // @ts-ignore
                  require(`../../../Assets/${imageType}/${props[
                    imageType as keyof CardInfoProps
                  ]
                    .toLowerCase()
                    .split(" ")
                    .join("")}.png`)
                : require(`../../../Assets/${imageType}/fallback.png`)
            }
            alt=""
          />
          <p className="absolute top-auto left-auto text-center hidden group-hover:block rounded-lg bg-stone-900/75 w-full">
            {props[imageType as keyof CardInfoProps]}
          </p>
        </div>
      );
    } else if (imageBlockTypes.withText.includes(imageType)) {
      return (
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-44 brightness-[80%]"
            src={require(`../../../Assets/cardPage/${imageType}.png`)}
            alt="type"
          />
          <p className="absolute top-[-3px] text-[22px] left-auto font-bold tracking-wider text-white">
            {props[imageType as keyof CardInfoProps]}
          </p>
        </div>
      );
    }
  };
  const infoBlocks = Object.keys(props).map((blockName) => {
    if (props[blockName as keyof CardInfoProps] !== undefined) {
      return (
        <div className={cardInfoBlock} key={blockName}>
          <div className="w-[50%] ml-4">{blockName.toUpperCase()}:</div>
          <div className="w-[50%] flex justify-center">
            {getImageInfoBlock(blockName)}
          </div>
        </div>
      );
    }
  });
  return (
    <div className="flex flex-col justify-evenly items-center w-[50%] z-10">
      {infoBlocks}
    </div>
  );
};

export default CardInfo;
