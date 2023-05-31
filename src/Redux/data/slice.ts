import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../info/types";
import { fetchData } from "./asyncActions";
import { Card, DataSliceState } from "./types";

const initialState: DataSliceState = {
    status: Status.IDLE,
    data: [],
    tempData: [],
    infinitePile: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers : {
        setTempData: (state, action:PayloadAction<Card[]>) => {
            state.tempData = action.payload
        },       
        addCardsToPile: (state, action: PayloadAction<Card[]>) => {
            state.infinitePile = state.infinitePile.concat(action.payload)
        },
        resetPile: (state) => {
            state.infinitePile = []
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
            state.tempData = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchData.pending, (state, action) => {
            state.data = []
            state.tempData = []
            state.status = Status.LOADING
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.data = []
            state.tempData = []
            state.status = Status.ERROR
        });
    }
})

export const {setTempData, addCardsToPile, resetPile} = dataSlice.actions

export default dataSlice.reducer