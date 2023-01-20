import { AdditionalFilterAction, FilterSliceState } from "./types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:FilterSliceState = {
    filterType: '',
    filterValue: '',
    additionalFilters: {
        attack: '',
        cost: '',
        health: '',
        durability: ''  
    },
    isValid: true
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
            state.additionalFilters[action.payload.filterType] = action.payload.value
            state.isValid = action.payload.isValid
        }
    }
})

export const {setFilterType, setFilterValue, resetFilterValue, setAdditionalFilter} = filterSlice.actions

export default filterSlice.reducer