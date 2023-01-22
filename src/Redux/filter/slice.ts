import { AdditionalFilterAction, FilterSliceState } from "./types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:FilterSliceState = {
    filterType: '',
    filterValue: '',
    additionalFilters: {
        attack: {value: '', isValid: true},
        cost: {value: '', isValid: true},
        health: {value: '', isValid: true},
        durability: {value: '', isValid: true}  
    },
}

const isInputValid = (input: string | number) => {
    return ((!isNaN(input as any) && input >=0) || input === '')
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterType: (state, action: PayloadAction<string>) => {
            state.filterType = action.payload
        },
        setFilterValue: (state, action: PayloadAction<string>) => {
            state.filterValue = action.payload
        },
        resetFilterValue: (state) => {
            state.filterValue = ''
        },
        setAdditionalFilter: (state, action: PayloadAction<AdditionalFilterAction>) => {
            state.additionalFilters[action.payload.filterType].value = action.payload.value
            state.additionalFilters[action.payload.filterType].isValid = isInputValid(action.payload.value)
        }
    }
})

export const {setFilterType, setFilterValue, resetFilterValue, setAdditionalFilter} = filterSlice.actions

export default filterSlice.reducer