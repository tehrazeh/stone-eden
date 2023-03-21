import React from 'react'
import { setAdditionalFilter } from '../../../Redux/filter/slice'
import { AdditionalFilters } from '../../../Redux/filter/types'
import { getInputStyle } from '../../../utils/functions'
import { useAppDispatch } from '../../../utils/hooks'

type OptionalBlockProps = {
    optionalFilters: AdditionalFilters,
    item: keyof AdditionalFilters
}

const OptionalFilterBlock: React.FC<OptionalBlockProps> = ({ optionalFilters, item }) => {

    const dispatch = useAppDispatch()
    return (
        <div key={item}
            className='flex flex-col wrap relative rounded-sm w-full h-[74px]
    bg-stone-800'>
            <div className="flex w-full justify-evenly absolute top-1">
                <img src={require(`../../../Assets/Attributes/${item}.png`)}
                    alt='attribute'
                    className="w-12 h-11" />
                <input type='text' placeholder={`Enter ${item}...`}
                    className={getInputStyle(optionalFilters[item].isValid)}
                    value={optionalFilters[item].value}
                    onChange={(e) => {
                        dispatch(setAdditionalFilter({
                            value: e.target.value,
                            filterValue: item
                        }))
                    }}
                />
            </div>
            <div className="flex w-full justify-center absolute bottom-0">
                {!optionalFilters[item].isValid && // input invalid - show tip
                    <p className="text-red-400 text-[14px]">Enter valid positive number</p>
                }
            </div>
        </div>
    )
}

export default OptionalFilterBlock