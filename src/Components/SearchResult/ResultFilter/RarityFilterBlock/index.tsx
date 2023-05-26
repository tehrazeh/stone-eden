import { setActiveFilters, setClassFilter } from '../../../../Redux/datafilter/slice'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'

const RarityFilterBlock = () => {
    const rarityOptions = ['common', 'rare', 'epic', 'legendary']
    const { dropdownFilters, activeFilters } = useAppSelector(state => state.dataFilter)
    const dispatch = useAppDispatch()

    const qualityElements = rarityOptions.map(element => {
        return <img src={require(`../../../../Assets/rarity/${element}.png`)} alt={element} key={element}
            className={`${(dropdownFilters.rarityFilter === element) ? 'brightness-[115%] scale-105' : 'brightness-[60%] hover:brightness-105'} 
            w-11 cursor-pointer transition-all`}
            onClick={() => {
                dispatch((dropdownFilters.rarityFilter === element) ? () => {
                        dispatch(setClassFilter({ filterType: 'rarity', filterValue: '' }))
                        dispatch(setActiveFilters(activeFilters.filter(filterOption => filterOption !== 'rarity')))
                    }
                    : () => {
                        dispatch(setClassFilter({ filterType: 'rarity', filterValue: element }))
                        if (!activeFilters.includes('rarity')) { // add a filter type if it was not active
                            dispatch(setActiveFilters([...activeFilters, 'rarity']))
                        }
                    }
                )
            }}
        />
    })
    return (
        <div className='w-full rounded bg-stone-800 h-12 flex flex-wrap justify-evenly items-center'>
            {qualityElements}
        </div>
    )
}

export default RarityFilterBlock