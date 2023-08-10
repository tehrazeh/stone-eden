import React from "react";

export type AttributeBlockProps = {
  attack: number | undefined;
  health: number | undefined;
  cost: number | undefined;
};
export const attributes = ["attack", "health", "cost"];

const AttributesBlock: React.FC<AttributeBlockProps> = (props) => {
  const attributesBlocks = attributes.map((attribute) => {
    return (
      <div
        className="flex justify-center items-center relative"
        key={attribute}
      >
        <img
          src={require(`../../../Assets/attribute/${attribute}.png`)}
          className="w-14 h-12 brightness-50"
          alt="attack"
        />
        <p className="absolute text-[38px] font-bold shadow-zinc-900 opacity-80 text-slate-100 top-auto right-auto">
          {props[attribute as keyof AttributeBlockProps]}
        </p>
      </div>
    );
  });

  return (
    <div className=" mt-2 w-[90%] bg-zinc-900 rounded h-14 grid grid-cols-3 grid-rows-1">
      {attributesBlocks}
    </div>
  );
};

export default AttributesBlock;
