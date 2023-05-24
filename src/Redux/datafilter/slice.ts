import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFilterSliceState, DataSort, DropdownFilters, VisibilityChecks } from "./types";

const initialState: DataFilterSliceState = {
    nameFilter: '',
    dropdownFilters: {
        playerClassFilter: 'playerClass',
        typeFilter: 'type',
        rarityFilter: ''
    },
    sortFilter: DataSort.DEFAULT,
    visibilityChecks: {
        attributeDropdownVisibility: false,
        typeDropdownVisibility: false,
        playerClassDropdownVisibility: false,
    },
    filterList: ['playerClass', 'type', 'attribute'],
    activeFilters: []
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
            const name: string = action.payload.filterType + 'DropdownVisibility'
            state.visibilityChecks[name as keyof VisibilityChecks] = action.payload.visibility
        },
        setClassFilter: (state, action:PayloadAction<{filterValue: string, filterType:string}>) => {
            const name = action.payload.filterType + 'Filter'
            state.dropdownFilters[name as keyof DropdownFilters] = action.payload.filterValue
        },
        setActiveFilters: (state, action:PayloadAction<string[]>) => {      
            state.activeFilters = action.payload
        }

    }
})

export const {setNameFilter, setDataFilter, toggleDropdown, 
    setClassFilter, setActiveFilters} = dataFilterSlice.actions
export default dataFilterSlice.reducer