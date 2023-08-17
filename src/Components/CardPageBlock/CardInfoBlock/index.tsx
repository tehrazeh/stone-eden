import { optionCheck } from "../../../utils/functions";

export type CardInfoProps = {
  type: string | undefined;
  race: string | undefined;
  rarity: string | undefined;
  playerClass: string | undefined;
};

const CardInfo: React.FC<CardInfoProps> = (props) => {
  const cardInfoBlock = `bg-stone-800 bg-opacity-[65%] p-1 rounded w-[90%] flex justify-evenly items-center text-[20px] text-slate-200`;

  const getImageInfoBlock = (imageType: string) => {
    const imageBlockTypes = {
      withFallback: ["type", "playerClass"],
      regular: ["rarity"],
      withText: ["race"],
    };

    // if (
    //   typeof props[imageType as keyof CardInfoProps] === 'string'
    // ) {
    //   return (
    //     <img
    //       className="w-20"
    //       src={
    //         optionCheck("type").includes(
    //           props[imageType as keyof CardInfoProps]
    //             .toLowerCase()
    //             .split(" ")
    //             .join("")
    //         )
    //           ? require(`../../../Assets/type/${props[
    //               imageType as keyof CardInfoProps
    //             ]
    //               .toLowerCase()
    //               .split(" ")
    //               .join("")}.png`)
    //           : require(`../../../Assets/fallbackFilter.png`)
    //       }
    //       alt="type"
    //     />
    //   );
    // }
  };

  getImageInfoBlock("race");
  const infoBlocks = Object.keys(props).map(() => {
    return;
  });
  return (
    <div className="flex flex-col justify-evenly items-center w-[50%] z-10">
      {props.type && (
        <div className={cardInfoBlock}>
          <div className="w-[50%]">Type:</div>
          <div className="w-[50%] flex justify-center">
            <img
              className="w-20"
              src={
                optionCheck("type").includes(
                  props.type.toLowerCase().split(" ").join("")
                )
                  ? require(`../../../Assets/type/${props.type
                      .toLowerCase()
                      .split(" ")
                      .join("")}.png`)
                  : require(`../../../Assets/fallbackFilter.png`)
              }
              alt="type"
            />
          </div>
        </div>
      )}
      {/* {props.race && (
        <div className={cardInfoBlock}>
          <div className="w-[50%]">Race:</div>
          <div className="w-[50%] flex justify-center relative">
            <img
              className="w-40 h-20 brightness-[80%]"
              src={require(`../../../Assets/race.png`)}
              alt="type"
            />
            <p className="absolute top-[31%] left-auto font-bold tracking-wider text-white">
              {props.race}
            </p>
          </div>
          <div className="w-[50%] flex justify-center relative">
            <img
              className="w-40 h-20 brightness-[80%]"
              src={require(`../../../Assets/race.png`)}
              alt="type"
            />
            <p className="absolute top-[31%] left-auto font-bold tracking-wider text-white">
              {props.race}
            </p>
          </div>
        </div>
      )} */}
      {props.rarity && (
        <div className={cardInfoBlock}>
          <div className="w-[50%]">Rarity:</div>
          <div className="w-[50%] flex justify-center">
            <img
              className="w-20"
              src={require(`../../../Assets/rarity/${props.rarity.toLowerCase()}.png`)}
              alt="type"
            />
          </div>
        </div>
      )}
      {props.playerClass && (
        <div className={cardInfoBlock}>
          <div className="w-[50%]">Player Class:</div>
          <div className="w-[50%] flex justify-center">
            <img
              className="w-20"
              src={
                optionCheck("playerClass").includes(
                  props.playerClass.toLowerCase().split(" ").join("")
                )
                  ? require(`../../../Assets/playerClass/${props.playerClass
                      .toLowerCase()
                      .split(" ")
                      .join("")}.png`)
                  : require(`../../../Assets/fallbackFilter.png`)
              }
              alt="type"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
