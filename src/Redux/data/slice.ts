import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../info/types";
import { fetchData } from "./asyncActions";
import { DataSliceState } from "./types";

const initialState: DataSliceState = {
    status: Status.IDLE,
    data: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers : {
    },
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchData.pending, (state, action) => {
            state.data = []
            state.status = Status.LOADING
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.data = []
            state.status = Status.ERROR
        });
    }
})

export default dataSlice.reducer