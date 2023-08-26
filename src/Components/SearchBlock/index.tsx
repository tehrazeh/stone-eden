import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { useSearchParams } from "react-router-dom";
import { setAdditionalFilter, setFilterValue } from "../../Redux/filter/slice";
import { useEffect } from "react";
import WarningBlock from "./warningBlock";
import { useSearchRequest } from "../../utils/functions";

const activeClass = `bg-green-900 m-2 border-green-600 h-14 w-40 text-green-600 text-lg
border-solid border-2 rounded shadow-inner shadow-green-700
hover:bg-green-800 hover:border-green-500 hover:text-green-500`;

const disabledClass = `bg-red-900 m-2 border-red-600 h-14 w-40 text-red-600 text-lg
border-solid border-2 rounded shadow-inner shadow-red-700 opacity-50 cursor-auto`;

const toggleButton = `w-10 hover:brightness-110 hover:scale-110 cursor-pointer transition-all`;

type SearchBlockProps = {
  blockVisibility: boolean;
  toggleBlockVisibility: (visibility: boolean) => void;
};

const SearchBlock: React.FC<SearchBlockProps> = ({
  blockVisibility,
  toggleBlockVisibility,
}) => {
  const { filterValue, filterType, additionalFilters } = useAppSelector(
    (state) => state.filter
  );
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  // TRY TO FIND BETTER SOLUTION THAN ITERATING THROUGH OBJECT WITH 4 KEYS FOR EVERY RERENDER
  let filterKey: keyof typeof additionalFilters;
  let isInputsValid = true;
  for (filterKey in additionalFilters) {
    if (!additionalFilters[filterKey].isValid) {
      isInputsValid = false;
    }
  }

  useEffect(() => {
    // if filtervalue is empty, we set up the selected option from link
    if (filterValue === "") {
      dispatch(setFilterValue(searchParams.get("value") || ""));
    }

    // console.log(Array.from(searchParams.entries()));

    // we check and set up additional filters if there are some
    if (searchParams.has("value")) {
      for (const [key, value] of Array.from(searchParams.entries())) {
        if (key in Object.keys(additionalFilters)) {
          dispatch(
            setAdditionalFilter({
              filterValue: key as keyof typeof additionalFilters,
              value,
            })
          );
        }
      }
    }
  }, []);

  const performSearch = useSearchRequest();
  const handleClick = () => {
    if (blockVisibility !== false) {
      //     // hide the filter block above
      toggleBlockVisibility(!blockVisibility);
    }
    performSearch();
  };
  return (
    <div className="w-full grid grid-cols-3 bg-stone-900 h-20 grid-rows-1">
      <div className=" flex justify-start items-center">
        <div className=" w-1/6 h-full flex justify-center items-center">
          {blockVisibility && (
            <img
              className={toggleButton}
              onClick={() => {
                toggleBlockVisibility(false);
              }}
              src={require("../../Assets/misc/hide.png")}
              alt="hide"
            />
          )}
          {!blockVisibility && (
            <img
              className={toggleButton}
              onClick={() => {
                toggleBlockVisibility(true);
              }}
              src={require("../../Assets/misc/show.png")}
              alt="show"
            />
          )}
        </div>
        <div className=" w-5/6 h-full flex justify-center items-center">
          {!isInputsValid && <WarningBlock text="Invalid input for filters" />}
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button
          className={
            isInputsValid && filterValue.length > 0
              ? activeClass
              : disabledClass
          }
          onClick={handleClick}
          disabled={!(isInputsValid && filterValue.length > 0)}
        >
          Search
        </button>
      </div>
      <div className="bg-stone-900 w-5/6 flex justify-center items-center">
        {filterValue.length <= 0 && filterType.length > 0 && (
          <WarningBlock text={`Select ${filterType.toUpperCase()} option`} />
        )}
      </div>
    </div>
  );
};

export default SearchBlock;
