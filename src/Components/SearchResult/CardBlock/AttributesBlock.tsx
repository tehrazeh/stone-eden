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
        className="flex justify-center items-center relative group"
        key={attribute}
      >
        <img
          src={require(`../../../Assets/attribute/${attribute}.png`)}
          className="w-14 h-12 brightness-[60%] group-hover:brightness-[40%]"
          alt="attack"
        />
        <p className="absolute text-[42px] group-hover:brightness-[40%] font-[700] shadow-zinc-900 opacity-[90%] text-slate-100 top-auto right-auto">
          {props[attribute as keyof AttributeBlockProps]}
        </p>
        <p
          className="absolute top-auto hidden right-auto rounded group-hover:flex h-[100%] w-[100%] 
        justify-center items-center bg-stone-700/50 text-slate-100"
        >
          {attribute.toLocaleUpperCase()}
        </p>
      </div>
    );
  });

  return (
    <div className=" w-full h-[50%] bg-zinc-900 rounded grid grid-cols-3 grid-rows-1">
      {attributesBlocks}
    </div>
  );
};

export default AttributesBlock;
