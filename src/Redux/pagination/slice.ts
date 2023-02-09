import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
    currentPage: 0,
    elementsPerPage: 10,
    totalPages: 0,
    totalItems: 0

}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = Math.ceil(action.payload / state.elementsPerPage)
        },
        setTotalItems: (state, action: PayloadAction<number>) => {
            state.totalItems = action.payload
        },
        setElementsPerPage: (state, action: PayloadAction<number>) => {
            state.elementsPerPage = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }

    }
})

export const {setTotalPages, setTotalItems, setElementsPerPage, setCurrentPage} = paginationSlice.actions

export default paginationSlice.reducer