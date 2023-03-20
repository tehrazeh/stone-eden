import React from 'react'
import { setAdditionalFilter } from '../../../Redux/filter/slice'
import { AdditionalFilters } from '../../../Redux/filter/types'
import { useAppDispatch } from '../../../utils/hooks'

type OptionalBlockProps = {
    optionalFilters: AdditionalFilters,
    item: keyof AdditionalFilters
}

const OptionalFilterBlock: React.FC<OptionalBlockProps> = ({ optionalFilters, item }) => {

    // function that returns style of the input
    const getInputStyle = (isValid: boolean = true) => {
        const color = isValid ? 'emerald' : 'red'
        return `bg-stone-900 rounded border-2 text-${color}-200 placeholder-${color}-100
        placeholder-opacity-50 p-1 border-solid border-${color}-700 focus:border-${color}-600
        focus:bg-stone-800 focus:outline-none`
    }

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