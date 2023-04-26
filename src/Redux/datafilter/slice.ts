import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFilterSliceState, DataSort, VisibilityChecks } from "./types";

const initialState: DataFilterSliceState = {
    nameFilter: '',
    classFilter: 'Class',
    typeFilter: 'Type',
    sortFilter: DataSort.DEFAULT,
    visibilityChecks: {
        attributeDropdownVisibility: false,
        typeDropdownVisibility: false,
        classDropdownVisibility: false,
    },
    filterList: ['Class', 'Type', 'Attribute']
}

const dataFilterSlice = createSlice({
    name: 'dataFilter',
    initialState, 
    reducers: {
        setNameFilter: (state, action:PayloadAction<string>) => {
            state.nameFilter = action.payload
        },
        setDataFilter: (state, action:PayloadAction<string>) => {
            state.sortFilter = action.payload as DataSort
        },
        toggleDropdown: (state, action:PayloadAction<{visibility:boolean, filterType:string}>) => {
            const name: string = action.payload.filterType.toLowerCase() + 'DropdownVisibility'
            state.visibilityChecks[name as keyof VisibilityChecks] = action.payload.visibility
        },
        setClassFilter: (state, action:PayloadAction<string>) => {
            state.classFilter = action.payload
        }
    }
})

export const {setNameFilter, setDataFilter, toggleDropdown, setClassFilter} = dataFilterSlice.actions
export default dataFilterSlice.reducer