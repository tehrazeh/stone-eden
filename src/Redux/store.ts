import { configureStore } from "@reduxjs/toolkit"
import info from './info/slice'
import filter from './filter/slice'
import data from './data/slice'
import pagination from './pagination/slice'
import dataFilter from './datafilter/slice'

export const store = configureStore({
  reducer: {
    info,
    filter,
    data,
    pagination,
    dataFilter
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
