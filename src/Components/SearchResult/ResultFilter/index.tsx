import { useState } from "react";
import { setDataFilter } from "../../../Redux/datafilter/slice";
import { DataSort } from "../../../Redux/datafilter/types"

import { useAppDispatch, useAppSelector } from "../../../utils/hooks";

const ResultFilter = () => {
  const dispatch = useAppDispatch()
  const options = [<li value={DataSort.DEFAULT}
    onClick={(() => {
      dispatch(setDataFilter((DataSort.DEFAULT)))
    })} key={DataSort.DEFAULT}>Default</li>]
  for (const value in DataSort) {
    if (value !== "DEFAULT") {
      options.push(
        <li value={value} key={value} 
        className="flex justify-around"
        onClick={(() => {
          dispatch(setDataFilter(DataSort[value as keyof typeof DataSort]))
        })}>
          <img src={require(`../../../Assets/Attributes/${value.split('_')[0].toLowerCase()}.png`)}
            className="w-8"
            alt={value.toLowerCase()} />
          <img src={require(`../../../Assets/${value.split('_')[1].toLowerCase()}.png`)}
            className="w-8"
            alt={value.toLowerCase()} />
        </li>)
    }
    // console.log(value.split('_')[1])
  }

  const [isDisplayed, toggleDisplay] = useState(false)
  const sortFilter = useAppSelector(state => state.dataFilter.sortFilter)
  return (
    <div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          toggleDisplay(!isDisplayed)
        }}>Filter</button>
      <div id="dropdownHover" className={`${(isDisplayed ? 'visible' : 'hidden')}
  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          {options}
        </ul>
      </div>
    </div>
  )
}

export default ResultFilter