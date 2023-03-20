import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
    currentPage: 0,
    elementsPerPage: 12,
    totalPages: 0,
    totalItems: 0, // not needed for now
    displayedItems: 0
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
        }

    }
})

export const {setTotalPages, setTotalItems, setElementsPerPage, setCurrentPage, setDisplayedItems} = paginationSlice.actions

export default paginationSlice.reducer