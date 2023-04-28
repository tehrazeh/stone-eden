import React from 'react'
import { setClassFilter, toggleDropdown } from '../../../../Redux/datafilter/slice'
import { optionCheck } from '../../../../utils/functions'
import { useAppDispatch } from '../../../../utils/hooks'
import resetImg from '../../../../Assets/reset.png'
type FilterOptionsProps = {
  options: string[] | undefined,
  dropdownVisibility: boolean,
  assetType: string,
  filter: string
}

const FilterOptions: React.FC<FilterOptionsProps> = (props) => {
  const dispatch = useAppDispatch()

  let elements
  if (props.options) {
    elements = props.options.map(element => {
      return <img key={element} src={(optionCheck(props.assetType).includes(element.toLowerCase().split(' ').join('')) ?
        require(`../../../../Assets/${props.assetType}/${element.toLowerCase().split(' ').join('')}.png`) :
        require(`../../../../Assets/fallbackFilter.png`))
      }
        alt='as' className={`${(element.toLowerCase().split(' ').join('') === props.filter ? 'brightness-110' : 'brightness-75')}
       w-14 m-1 cursor-pointer hover:brightness-125 hover:scale-105 transition-all`}
        onClick={() => {
          dispatch(setClassFilter({
            filterValue:element.toLowerCase().split(' ').join(''),
            filterType:props.assetType}))
          dispatch(toggleDropdown({ visibility: false, filterType: props.assetType }))
        }} />
    })
  }

  return (
    <div className={`${(props.dropdownVisibility ? 'visible' : 'hidden')}
    w-full rounded bg-stone-900 flex flex-wrap justify-around`}>
      {elements}
      <img src={resetImg} alt='reset'
      onClick={() => {
        dispatch(setClassFilter({filterValue:props.assetType, filterType:props.assetType}))
        dispatch(toggleDropdown({ visibility: false, filterType: props.assetType }))
      }}
      className= 'w-14 m-1 cursor-pointer hover:brightness-125 hover:scale-105 transition-all'/>
    </div>
  )
}

export default FilterOptions