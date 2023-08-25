import { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import { useParams, useSearchParams } from "react-router-dom";
import OptionalFilter from "../Components/OptionalFilter";
import { fetchInfo } from "../Redux/info/asyncActions";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import SearchBlock from "../Components/SearchBlock";
import { setFilterType } from "../Redux/filter/slice";
import ResultBlock from "../Components/SearchResult/ResultBlock";
import { Status } from "../Redux/info/types";
import notFoundImg from "../Assets/not-found.png";
import notFoundLazy from "../Assets/not-found-lazy.png";
import { NavButtons } from "../Redux/datafilter/types";

const Search: React.FC = () => {
  const { type } = useParams();
  const { status } = useAppSelector((state) => state.info);
  const fetchStatus = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("search"));

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchInfo());
      if (type && type in NavButtons) {
        // thanks https://stackoverflow.com/questions/43804805/check-if-value-exists-in-enum-in-typescript
        dispatch(setFilterType(type));
      }
    }
  }, [status, dispatch, type]);
  const [visibility, setVisibility] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <div
        className={`${visibility ? "" : "hidden"}
       bg-stone-900 px-2 pt-2 w-full h-[224px] grid grid-cols-4 grid-rows-1 gap-4 transition-all`}
      >
        <div className="bg-stone-700 h-full rounded col-span-3 overflow-y-auto">
          <Filter type={type ? type : "classes"} />
        </div>
        <div className="bg-stone-700 rounded flex justify-center items-center flex-col">
          <OptionalFilter />
        </div>
      </div>

      <SearchBlock
        blockVisibility={visibility}
        toggleBlockVisibility={(changeVisibility) =>
          setVisibility(changeVisibility)
        }
      />

      {(fetchStatus === Status.SUCCESS || fetchStatus === Status.LOADING) && (
        <ResultBlock />
      )}
      {fetchStatus === Status.ERROR && (
        <div
          className="flex justify-center m-2 rounded border-4 border-emerald-700
       items-center flex-col w-[98%] bg-stone-900"
        >
          <h2 className="text-4xl tracking-wide text-emerald-300">
            {fetchStatus.toUpperCase()}
          </h2>
          {loaded ? null : (
            <img
              src={notFoundLazy}
              className="w-[600px]"
              alt="not found loading"
            />
          )}
          <img
            src={notFoundImg}
            className={`${loaded ? "w-[600px]" : "hidden"}`}
            onLoad={() => setLoaded(true)}
            alt="Not Found"
          />
        </div>
      )}
    </div>
  );
};

export default Search;
