import { setDataFilter } from '../../../../Redux/datafilter/slice'
import { DataSort } from '../../../../Redux/datafilter/types'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'

const Options = () => {
  const liClass = `flex cursor-pointer pl-2 justify-start font-thin hover:brightness-150
   bg-stone-800 h-9 items-center text-emerald-300`
  const options = []
  const {sortFilter, isDropdownVisible} = useAppSelector(state => state.dataFilter)
  const dispatch = useAppDispatch()
  for (const value in DataSort) {
      options.push(
        <li value={value} key={value} 
        className={`${liClass} ${DataSort[value as keyof typeof DataSort] === sortFilter ? 'brightness-150' : ''}`}
        onClick={(() => {
          dispatch(setDataFilter(DataSort[value as keyof typeof DataSort]))
        })}>
          {(value === "DEFAULT") ? 'DEFAULT' : <>
          <img src={require(`../../../../Assets/Attributes/${DataSort[value as keyof typeof DataSort].split(' ')[0].toLowerCase()}.png`)}
            className="w-8 h-7"
            alt={value.toLowerCase()} />
          <img src={require(`../../../../Assets/${DataSort[value as keyof typeof DataSort].split(' ')[1].toLowerCase()}.png`)}
            className="w-8 h-7 brightness-75"
            alt={value.toLowerCase()} /></>}
        </li>)
  }
  return (
    <div className={`${(isDropdownVisible ? 'visible' : 'hidden')}
    w-[90%] bg-stone-800 rounded`}>
      <ul className="divide-y divide-zinc-600">
        {options}
      </ul>
  </div>
  )
}

export default Options