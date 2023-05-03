import React from 'react'
import { setQualityFilter } from '../../../../Redux/datafilter/slice'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'

const QualityFilterBlock = () => {
    const qualities = ['common', 'rare', 'epic', 'legendary']
    const activeFilter = useAppSelector(state => state.dataFilter.qualityFilter)
    const dispatch = useAppDispatch()

    const qualityElements = qualities.map(element => {
        return <img src={require(`../../../../Assets/Qualities/${element}.png`)} alt={element} key={element}
            className={`${(activeFilter === element) ? 'brightness-[115%] scale-105' : 'brightness-[60%] hover:brightness-105'} 
            w-11 cursor-pointer transition-all`}
            onClick={() => {
                dispatch((activeFilter === element) ? setQualityFilter('') : setQualityFilter(element))
            }}
        />
    })
    return (
        <div className='w-full rounded bg-stone-800 h-12 flex flex-wrap justify-evenly items-center'>
            {qualityElements}
        </div>
    )
}

export default QualityFilterBlock