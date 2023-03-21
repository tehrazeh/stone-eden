import { useState } from 'react'
import { setDataFilter } from '../../../../Redux/datafilter/slice'
import { DataSort } from '../../../../Redux/datafilter/types'

const Options = () => {
    // const [filterValue, changeFilterValue] = useState('SORT')
    // const liClass = `flex cursor-pointer pl-2 justify-start font-thin hover:brightness-150
    //  bg-stone-800 h-9 items-center text-emerald-300`
    // const options = []
    // for (const value in DataSort) {
    //     options.push(
    //       <li value={value} key={value} 
    //       className={`${liClass} ${DataSort[value as keyof typeof DataSort] === sortFilter ? 'brightness-150' : ''}`}
    //       onClick={(() => {
    //         dispatch(setDataFilter(DataSort[value as keyof typeof DataSort]))
    //         changeFilterValue(value)
    //       })}>
    //         {(value === "DEFAULT") ? 'DEFAULT' : <>
    //         <img src={require(`../../../Assets/Attributes/${value.split('_')[0].toLowerCase()}.png`)}
    //           className="w-7 h-6"
    //           alt={value.toLowerCase()} />
    //         <img src={require(`../../../Assets/${value.split('_')[1].toLowerCase()}.png`)}
    //           className="w-7 h-6 brightness-75"
    //           alt={value.toLowerCase()} /></>}
    //       </li>)
    // }
  return (
    <div>Options</div>
  )
}

export default Options