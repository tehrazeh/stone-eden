import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/data/asyncActions";
import { resetPile } from "../Redux/data/slice";
import { Card, RequestOptions } from "../Redux/data/types";
import { resetAllFilters } from "../Redux/datafilter/slice";
import { DataSort } from "../Redux/datafilter/types";
import { Params } from "../Redux/filter/types";
import { setCurrentPage, setInfiniteScroll } from "../Redux/pagination/slice";
import { fallbackCard } from "./hardData";
import { useAppDispatch, useAppSelector } from "./hooks";

export const paginateArray = (
  arr: Card[],
  elementsPerPage: number,
  currentPage: number
) => {
  const indexMin = currentPage * elementsPerPage; // start index of a portion that will be displayed
  const indexMax = indexMin + elementsPerPage; // end index of a portion that will be displayed
  return arr.filter((element, index) => index >= indexMin && index < indexMax);
};

function sortByProperty(property: keyof Card, order: string) {
  const sortOrder = order === "asc" ? 1 : -1; // determine the order of filter
  return function (card1: Card, card2: Card) {
    // ?? -1 is default value if the property is not present
    const result =
      (card1[property] ?? -1) < (card2[property] ?? -1)
        ? -1
        : (card1[property] ?? -1) > (card2[property] ?? -1)
        ? 1
        : 0;
    return result * sortOrder; // change the order of filter if necessary
  };
}

export const sortArray = (
  arr: Card[],
  defaultArr: Card[],
  sortFilter: DataSort
) => {
  const arrCopy = [...arr]; // make a copy to avoid mutation
  if (sortFilter === DataSort.DEFAULT) {
    // if the filter is back to default, we return the first version we got from api
    return [...defaultArr];
  }
  return arrCopy.sort(
    sortByProperty(
      sortFilter.split("_")[0] as keyof Card,
      sortFilter.split("_")[1]
    )
  );
};

// function that returns style of the input
export const getInputStyle = (isValid: boolean = true) => {
  // const color = isValid ? 'emerald' : 'red' for some reason substitution with color variable does not work properly
  return isValid
    ? `bg-stone-900 rounded border-2 text-green-200 placeholder-green-100
        placeholder-opacity-50 p-1 border-solid border-green-700 focus:border-green-600
        focus:bg-stone-800 focus:outline-none h-7`
    : `bg-stone-900 rounded border-2 text-red-200 placeholder-red-100
        placeholder-opacity-50 p-1 border-solid border-red-700 focus:border-red-600
        focus:bg-stone-800 focus:outline-none h-7`;
};

export const optionCheck = (option: string) => {
  // TODO! find a better way to set up a fallback image without creating pre supported data
  switch (option) {
    case "playerClass": {
      return [
        "deathknight",
        "druid",
        "hunter",
        "mage",
        "warrior",
        "demonhunter",
        "paladin",
        "priest",
        "rogue",
        "shaman",
        "warlock",
      ];
    }
    case "rarity": {
      return ["common", "rare", "epic", "legendary"];
    }
    case "type": {
      return ["location", "spell", "minion", "hero", "weapon", "heropower"];
    }
    default: {
      return ["free", "common", "rare", "epic", "legendary"];
    }
  }
};

export const getCard = async (cardId: string) => {
  const options: RequestOptions = {
    method: "GET",
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardId}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY as string,
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request<Card[]>(options);
    return data[0];
  } catch (e) {
    return fallbackCard;
  }
};

export const useSearchRequest = () => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { filterValue, filterType, additionalFilters } = useAppSelector(
    (state) => state.filter
  );
  const { infiniteScroll } = useAppSelector((state) => state.pagination);

  const performSearch = () => {
    let filterKey: keyof typeof additionalFilters;
    dispatch(resetAllFilters());
    const params: Params = {
      search: "active",
      value: filterValue,
    };
    for (filterKey in additionalFilters) {
      if (additionalFilters[filterKey].value !== "") {
        params[filterKey] = additionalFilters[filterKey].value.toString();
      }
    }
    setSearchParams(params); // update url with selected search parameter
    params.type = filterType; // add type for the fetch request, but after the setSearchParams to not include it in the link twice
    // console.log(params);
    dispatch(fetchData(params)); // fetch data from api
    dispatch(setCurrentPage(1)); // set 1st page by default

    if (infiniteScroll) {
      dispatch(resetPile()); // reset infinite pile of cards to empty array
      dispatch(setInfiniteScroll(false)); // set infinite scroll to false
    }
  };
  return performSearch;
};
