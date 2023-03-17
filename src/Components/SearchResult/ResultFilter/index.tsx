import { useState } from "react";
import { setDataFilter } from "../../../Redux/datafilter/slice";
import { DataSort } from "../../../Redux/datafilter/types"
import dropdownImg from "../../../Assets/dropdown.png"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";

const ResultFilter = () => {
  const dispatch = useAppDispatch()
  const [isDisplayed, toggleDisplay] = useState(false)
  const [filterValue, changeFilterValue] = useState('SORT')
  const sortFilter = useAppSelector(state => state.dataFilter.sortFilter)
  const liClass = `flex cursor-pointer pl-2 justify-start font-thin hover:brightness-150 bg-stone-800 h-9 items-center text-emerald-300`
  const options = []
  for (const value in DataSort) {
      options.push(
        <li value={value} key={value} 
        className={`${liClass} ${DataSort[value as keyof typeof DataSort] === sortFilter ? 'brightness-150' : ''}`}
        onClick={(() => {
          dispatch(setDataFilter(DataSort[value as keyof typeof DataSort]))
          changeFilterValue(value)
        })}>
          {(value === "DEFAULT") ? 'DEFAULT' : <>
          <img src={require(`../../../Assets/Attributes/${value.split('_')[0].toLowerCase()}.png`)}
            className="w-7 h-6"
            alt={value.toLowerCase()} />
          <img src={require(`../../../Assets/${value.split('_')[1].toLowerCase()}.png`)}
            className="w-7 h-6 brightness-75"
            alt={value.toLowerCase()} /></>}
        </li>)
  }
  return (
    <div className="bg-neutral-900 text-lg border-solid border-2
     border-neutral-600 w-[95%] flex flex-col items-center rounded">
      <button className="bg-stone-800 m-2 h-8 hover:bg-stone-600 w-[80%]
       rounded font-thin text-emerald-300 relative flex items-center justify-start pl-2"
        onClick={() => {
          toggleDisplay(!isDisplayed)
        }} 
        onBlur={() => { // to give time for onclick of li element to execute before rerender that caused by onblur
          setTimeout(() => toggleDisplay(false), 150)
        }}>
          {(filterValue === 'SORT' || filterValue === 'DEFAULT') ? <>{filterValue}</> : <>
          <img src={require(`../../../Assets/Attributes/${filterValue.split('_')[0].toLowerCase()}.png`)}
            className="w-7 h-6"
            alt={filterValue.toLowerCase()} />
          <img src={require(`../../../Assets/${filterValue.split('_')[1].toLowerCase()}.png`)}
            className="w-7 h-6 brightness-75"
            alt={filterValue.toLowerCase()} /></>}
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