import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFilterSliceState, DataSort } from "./types";

const initialState: DataFilterSliceState = {
    nameFilter: '',
    sortFilter: DataSort.DEFAULT
}

const dataFilterSlice = createSlice({
    name: 'dataFilter',
    initialState, 
    reducers: {
        setNameFilter: (state, action:PayloadAction<string>) => {
            state.nameFilter = action.payload
        },
        setDataFilter: (state, action:PayloadAction<string>) => {
            state.sortFilter = action.payload as DataSort
        }
    }
})

export const {setNameFilter, setDataFilter} = dataFilterSlice.actions
export default dataFilterSlice.reducer