import React from 'react'
import { setActiveFilters, setClassFilter, toggleDropdown } from '../../../../Redux/datafilter/slice'
import { optionCheck } from '../../../../utils/functions'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'
import resetImg from '../../../../Assets/reset.png'
import { DropdownFilters, VisibilityChecks } from '../../../../Redux/datafilter/types'
type FilterOptionsProps = {
  options: string[] | undefined,
  assetType: string,
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ options, assetType }) => {
  const dispatch = useAppDispatch()
  const dropdownVisibility = useAppSelector(state => state.dataFilter.visibilityChecks)
  const filter = useAppSelector(state => state.dataFilter.dropdownFilters)
  let elements
  if (options) {
    elements = options.map(element => {
      return <img key={element}
        src={(optionCheck(assetType).includes(element.toLowerCase().split(' ').join('')) ?
          require(`../../../../Assets/${assetType}/${element.toLowerCase().split(' ').join('')}.png`) :
          require(`../../../../Assets/fallbackFilter.png`))
        }
        alt={element}
        className={`${(element.toLowerCase().split(' ').join('') === filter[`${assetType.toLowerCase()}Filter` as keyof DropdownFilters]
          ? 'brightness-110 scale-105' : 'brightness-50')}
        w-14 m-1 cursor-pointer hover:brightness-125 hover:scale-105 transition-all`}
        onClick={() => {
          dispatch(setClassFilter({
            filterValue: element.toLowerCase().split(' ').join(''),
            filterType: assetType
          }))
          dispatch(toggleDropdown({ visibility: false, filterType: assetType }))
        }} />
    })
  }

  return (
    <div className={`${dropdownVisibility[`${assetType.toLowerCase()}DropdownVisibility` as keyof VisibilityChecks]
      ? 'visible' : 'hidden'}
    w-full rounded bg-stone-900 flex flex-wrap justify-around`}>
      {elements}
      <img src={resetImg} alt='reset'
        onClick={() => {
          dispatch(setClassFilter({ filterValue: assetType, filterType: assetType }))
          dispatch(toggleDropdown({ visibility: false, filterType: assetType }))
          // dispatch(setActiveFilters({}))
        }}
        className='w-14 m-1 cursor-pointer hover:brightness-125 brightness-50 hover:scale-105 transition-all' />
    </div>
  )
}

export default FilterOptions