import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PaginationSliceState } from "./types"

const initialState: PaginationSliceState = {
    currentPage: 0,
    elementsPerPage: 15,
    totalPages: 0,
    totalItems: 0, // not needed for now
    displayedItems: 0,
    infiniteScroll: false, // for infinite scrolling
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = Math.ceil(action.payload / state.elementsPerPage)
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
        // not needed for now
        // setTotalItems: (state, action: PayloadAction<number>) => {
        //     state.totalItems = action.payload
        // },

    }
})

export const { setTotalPages, setElementsPerPage, setCurrentPage,
    setDisplayedItems, setInfiniteScroll } = paginationSlice.actions

export default paginationSlice.reducer