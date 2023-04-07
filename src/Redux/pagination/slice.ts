import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../data/types"
import { PaginationSliceState } from "./types"

const initialState: PaginationSliceState = {
    currentPage: 0,
    elementsPerPage: 12,
    totalPages: 0,
    totalItems: 0, // not needed for now
    displayedItems: 0,
    infiniteScroll: false, // for infinite scrolling
    infinitePile: []
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = Math.ceil(action.payload / state.elementsPerPage)
        },
        // not needed for now
        setTotalItems: (state, action: PayloadAction<number>) => {
            state.totalItems = action.payload
        },
        setElementsPerPage: (state, action: PayloadAction<number>) => {
            state.elementsPerPage = action.payload
            state.totalPages = Math.ceil(state.displayedItems / action.payload)
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setDisplayedItems: (state, action: PayloadAction<number>) => {
            state.displayedItems = action.payload
        },
        setInfiniteScroll: (state, action: PayloadAction<boolean>) => {
            state.infiniteScroll = action.payload
        },
        addCardsToPile: (state, action: PayloadAction<Card[]>) => {
            // console.log(action.payload)
            state.infinitePile = state.infinitePile.concat(action.payload)
            console.log(state.infinitePile)
        }

    }
})

export const { setTotalPages, setTotalItems, setElementsPerPage,
    setCurrentPage, setDisplayedItems, setInfiniteScroll, addCardsToPile } = paginationSlice.actions

export default paginationSlice.reducer