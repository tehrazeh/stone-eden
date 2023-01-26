import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../info/types";
// import { fetchData } from "./asyncActions";
import { DataSliceState } from "./types";

const initialState: DataSliceState = {
    status: Status.LOADING,
    url: ''
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers : {
    },
    // extraReducers(builder) {
    //     builder.addCase(fetchData.fulfilled, (state, action) => {
    //         state.url = action.payload
    //         state.status = Status.SUCCESS
    //     })
    // }
})

export default dataSlice.reducer