import { FilterSliceState } from "./types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:FilterSliceState = {
    filterType: '',
    filterValue: '',
    attack: null,
    cost: null,
    health: null,
    durability: null  
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
        }
    }
})

export const {setFilterType, setFilterValue} = filterSlice.actions

export default filterSlice.reducer