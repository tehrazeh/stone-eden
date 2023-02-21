import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFilterSliceState } from "./types";

const initialState: DataFilterSliceState = {
    nameFilter: ''
}

const dataFilterSlice = createSlice({
    name: 'dataFilter',
    initialState, 
    reducers: {
        setNameFilter: (state, action:PayloadAction<string>) => {
            state.nameFilter = action.payload
        }
    }
})

export const {setNameFilter} = dataFilterSlice.actions
export default dataFilterSlice.reducer