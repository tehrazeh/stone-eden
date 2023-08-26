import { Status } from "../info/types";

// create types for all types of cards with optional fields
export type DataSliceState = {
  status: Status;
  data: Array<Card>;
  tempData: Array<Card>;
  infinitePile: Card[];
};

export type Card = {
  cardId: string;
  dbfId: number;
  name: string;
  cardSet: string;
  type: string;
  faction?: string;
  rarity?: string;
  cost?: number;
  attack?: number;
  health?: number;
  text?: string;
  flavor?: string;
  artist?: string;
  collectible?: boolean;
  elite?: boolean;
  race?: string;
  playerClass?: string;
  img?: string;
  imgGold?: string;
  locale?: string;
};

export type RequestOptions = {
  method: string;
  url: string;
  params?: {
    cost?: string;
    attack?: string;
    health?: string;
    durability?: string;
  };
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};
