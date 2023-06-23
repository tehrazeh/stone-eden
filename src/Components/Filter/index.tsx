import { Info } from "../../Redux/info/types";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { setFilterValue } from "../../Redux/filter/slice";
import { isInfo } from "../../utils/guards";
import FadeLoader from "react-spinners/FadeLoader";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type FilterProps = {
  type: string;
};

// This is component with buttons that represent the main filter for card search, including all
// instances of header sections
const Filter: React.FC<FilterProps> = ({ type }) => {
  // get the text of elements to create filter buttons
  const elements = useAppSelector((state) => {
    if (isInfo(state.info.info) && type in state.info.info) {
      // thanks !! https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
      return state.info.info[type as keyof Info];
    }
  }) as string[];

  const { status } = useAppSelector((state) => state.info);
  const { filterValue } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  // ref to subscribe to current status, if the loading is over 10 seconds or api request returns error
  // hide the loader and display what went wrong with button to redirect to home page
  const [warningDisplay, setWarningDisplay] = useState(false);
  const countRef = useRef(status);
  countRef.current = status;

  useEffect(() => {
    setTimeout(() => {
      if (countRef.current === "loading" || countRef.current === "error") {
        setWarningDisplay(true);
      }
    }, 10000);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-start w-full h-full">
      {elements ? (
        elements
          .filter((item, index) => {
            // indexOf to return first occurence and filter duplicates
            return elements.indexOf(item) === index;
          })
          .filter((item) => {
            return item.toLowerCase() !== "enchantment"; // temporarily avoid enchantments cause they are baggy
          })
          .map((item, index) => {
            return (
              <button
                className={`${
                  filterValue === item
                    ? "button-active"
                    : "button-regular hover:bg-stone-800 bg-stone-700"
                } 
                        text-emerald-200 w-24 h-[44px] p-x-2 m-1 text-[10px] tracking-wider`}
                onClick={() => dispatch(setFilterValue(item))}
                key={index}
              >
                {item}
              </button>
            );
          })
      ) : (
        <div className="flex flex-wrap flex-col justify-center h-full w-full items-center">
          {warningDisplay ? (
            <>
              <p className="text-[30px] text-green-300 m-2">
                {countRef.current === "loading"
                  ? "Oops, timeout. Try again later ;)"
                  : "Error, database does not respond."}
              </p>
              <Link
                to="/"
                className=" bg-stone-900 border-solid hover:bg-stone-800 hover:cursor-pointer rounded text-green-300 p-2"
              >
                Magic Fix
              </Link>
            </>
          ) : (
            <FadeLoader color="#36d7b7" />
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
