import React from 'react'
import { setClassFilter } from '../../../../Redux/datafilter/slice'
import { useAppDispatch } from '../../../../utils/hooks'
type FilterOptionsProps = {
  options: string[] | undefined,
  dropdownVisibility: boolean,
  assetType: string,
  filter: string
}

const FilterOptions:React.FC<FilterOptionsProps> = (props) => {
  const dispatch = useAppDispatch()

  const optionCheck = () => {
    
    // TODO! find a better way to set up a fallback image without creating pre supported data
    return (props.assetType.toLowerCase() === 'class' ? 
    ['deathknight', 'druid', 'hunter', 'mage', 'warrior', 'demonhunter',
    'paladin', 'priest', 'rogue', 'shaman', 'warlock'] : [
      'location', 'spell', 'minion', 'hero', 'weapon', 'heropower'
    ])
  }

  
  let elements
  if (props.options) {
    elements = props.options.map(element => {
      return <img key={element} src={ (optionCheck().includes(element.toLowerCase().split(' ').join('')) ? 
        require(`../../../../Assets/${props.assetType}/${element.toLowerCase().split(' ').join('')}.png`) : 
        require(`../../../../Assets/${props.assetType}/fallback.png`) )
        }
       alt='as' className='w-14 my-1 cursor-pointer brightness-75 hover:brightness-125 hover:scale-105 transition-all'
       onClick={() => dispatch(setClassFilter(element.toLowerCase().split(' ').join('')))}/>
    }) 
  }
  
  return (
    <div className={`${(props.dropdownVisibility ? 'visible' : 'hidden')}
    w-full rounded bg-emerald-800 flex flex-wrap justify-around`}>
      {elements}
    </div>
  )
}

export default FilterOptions