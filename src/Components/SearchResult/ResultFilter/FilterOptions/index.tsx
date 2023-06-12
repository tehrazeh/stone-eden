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
  const {visibilityChecks, dropdownFilters, activeFilters} = useAppSelector(state => state.dataFilter)
  let elements
  if (options) {
    elements = options.map(element => {
      return <div key={element} className='group relative
      w-[58px] rounded-3xl h-[58px] flex justify-center items-center m-[4px]'>
        <img src={(optionCheck(assetType).includes(element.toLowerCase().split(' ').join('')) ?
            require(`../../../../Assets/${assetType}/${element.toLowerCase().split(' ').join('')}.png`) :
            require(`../../../../Assets/fallbackFilter.png`))
          }
          alt={element}
          className={`${(element.toLowerCase().split(' ').join('') === dropdownFilters[`${assetType}Filter` as keyof DropdownFilters]
            ? 'brightness-110 scale-105' : 'brightness-50')}
          w-14 m-1 cursor-pointer group-hover:brightness-125 group-hover:scale-105 transition-all`}
          onClick={() => {
            dispatch(setClassFilter({
              filterValue: element.toLowerCase().split(' ').join(''),
              filterType: assetType
            }))
            dispatch(toggleDropdown({ visibility: false, filterType: assetType }))
            if (!activeFilters.includes(assetType)) { // add a filter type if it was not active
                dispatch(setActiveFilters([...activeFilters, assetType]))
            }
        }} />
        <p className='group-hover:opacity-80 transition-all  flex justify-center items-center
        opacity-0 bg-stone-900 absolute rounded-2xl top-[42px] leading-[11px]
        text-[12px] w-16 h-[22px] text-center text-emerald-400'>{element}</p>
        </div>
    })
  }

  return (
    <div className={`${visibilityChecks[`${assetType}DropdownVisibility` as keyof VisibilityChecks]
      ? 'visible' : 'hidden'}
    w-full rounded bg-stone-900 flex flex-wrap justify-around`}>
      {elements}
      <img src={resetImg} alt='reset'
        onClick={() => {
          dispatch(setClassFilter({ filterValue: assetType, filterType: assetType }))
          dispatch(toggleDropdown({ visibility: false, filterType: assetType }))
          dispatch(setActiveFilters(activeFilters.filter(filterOption => filterOption !== assetType)))
        }}
        className='w-14 m-1 cursor-pointer hover:brightness-125 brightness-50 hover:scale-105 transition-all' />
    </div>
  )
}

export default FilterOptions