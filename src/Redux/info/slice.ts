import { createSlice } from "@reduxjs/toolkit"
import { InfoSliceState, Status } from './types'
import { fetchInfo } from "./asyncActions"

const initialState: InfoSliceState = {
    info: {},
    status: Status.LOADING
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchInfo.pending, (state) => {
            state.status = Status.LOADING
            state.info = {}
        });
        builder.addCase(fetchInfo.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.info = action.payload
        });
        builder.addCase(fetchInfo.rejected, (state) => {
            state.status = Status.ERROR
            state.info = {}
        });
    }
})

export default infoSlice.reducer