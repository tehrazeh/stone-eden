import { useState } from "react";
import { setDataFilter } from "../../../Redux/datafilter/slice";
import { DataSort } from "../../../Redux/datafilter/types"
import dropdownImg from "../../../Assets/dropdown.png"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";

const ResultFilter = () => {
  const dispatch = useAppDispatch()
  const [isDisplayed, toggleDisplay] = useState(false)
  const sortFilter = useAppSelector(state => state.dataFilter.sortFilter)
  const liClass = `flex cursor-pointer pl-2 justify-start hover:brightness-150 bg-stone-800 h-9 items-center text-emerald-300`
  const options = [<li value={DataSort.DEFAULT} className={liClass}
    onClick={(() => {
      dispatch(setDataFilter((DataSort.DEFAULT)))
    })} key={DataSort.DEFAULT}>Default</li>]
  for (const value in DataSort) {
    if (value !== "DEFAULT") {
      options.push(
        <li value={value} key={value} 
        className={`${liClass} ${DataSort[value as keyof typeof DataSort] === sortFilter ? 'brightness-150' : ''}`}
        onClick={(() => {
          dispatch(setDataFilter(DataSort[value as keyof typeof DataSort]))
        })}>
          <img src={require(`../../../Assets/Attributes/${value.split('_')[0].toLowerCase()}.png`)}
            className="w-7 h-6"
            alt={value.toLowerCase()} />
          <img src={require(`../../../Assets/${value.split('_')[1].toLowerCase()}.png`)}
            className="w-7 h-6 brightness-75"
            alt={value.toLowerCase()} />
        </li>)
    }
  }
  return (
    <div className="bg-neutral-900 text-lg border-solid border-2
     border-neutral-600 w-[95%] flex flex-col items-center rounded">
      <button className="bg-stone-800 m-2 h-8 hover:bg-stone-600 w-[80%] rounded text-emerald-300 relative"
        onClick={() => {
          toggleDisplay(!isDisplayed)
        }} 
        onBlur={() => { // to give time for onclick of li element to execute before rerender that caused by onblur
          setTimeout(() => toggleDisplay(false), 150)
        }}>
          Sort
          <img src={dropdownImg}
           className={`${isDisplayed ? 'brightness-125' : 'brightness-75'} w-[9px] absolute bottom-1 right-1`}
           alt='dropdown' />
          </button>
      <div className={`${(isDisplayed ? 'visible' : 'hidden')}
        w-[80%] bg-stone-800 rounded `}>
        <ul className="divide-y divide-zinc-600">
          {options}
        </ul>
      </div>
    </div>
  )
}

export default ResultFilter