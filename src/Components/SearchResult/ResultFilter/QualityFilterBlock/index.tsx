import React from 'react'

const QualityFilterBlock = () => {
    const qualities = ['common', 'rare', 'epic', 'legendary']

    const qualityElements = qualities.map(element => {
        return <img src={require(`../../../../Assets/Qualities/${element}.png`)} alt={element} key={element}
            className='brightness-75 w-11 m-1 cursor-pointer hover:brightness-125 hover:scale-105 transition-all'
        />
    })
    return (
        <div className='w-full rounded bg-stone-800 h-12 flex flex-wrap justify-around'>
            {qualityElements}
        </div>
    )
}

export default QualityFilterBlock