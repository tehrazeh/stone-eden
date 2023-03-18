import React from 'react'
import { setAdditionalFilter } from '../../../Redux/filter/slice'
import { AdditionalFilters } from '../../../Redux/filter/types'
import { useAppDispatch } from '../../../utils/hooks'

type OptionalBlockProps = {
    optionalFilters: AdditionalFilters,
    item: string
}


const OptionalFilterBlock: React.FC<OptionalBlockProps> = ({ optionalFilters, item }) => {
    const inputValid = `bg-stone-900 rounded border-2 text-emerald-200 placeholder-emerald-100
    placeholder-opacity-50 p-1 border-solid border-emerald-700 focus:border-emerald-600
    focus:bg-stone-800 focus:outline-none focus:text-emerald-200`

    const inputInvalid = `bg-stone-900 rounded border-2 text-red-200 placeholder-red-100
    placeholder-opacity-50 p-1 border-solid border-red-700 focus:border-red-600
    focus:bg-stone-800 focus:outline-none focus:text-red-200`

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
                    className={optionalFilters[item as keyof typeof optionalFilters].isValid ? inputValid : inputInvalid}
                    value={optionalFilters[item as keyof typeof optionalFilters].value}
                    onChange={(e) => {
                        dispatch(setAdditionalFilter({
                            value: e.target.value,
                            filterValue: item as keyof typeof optionalFilters
                        }))
                    }}
                />
            </div>
            <div className="flex w-full justify-center absolute bottom-0">
                {!optionalFilters[item as keyof typeof optionalFilters].isValid && // input invalid - show tip
                    <p className="text-red-400 text-[14px]">Enter valid positive number</p>
                }
            </div>
        </div>
    )
}

export default OptionalFilterBlock