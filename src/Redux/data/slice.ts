import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../info/types";
import { DataSliceState } from "./types";

const initialState: DataSliceState = {
    status: Status.LOADING
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers : {

    }
})

export default dataSlice.reducer