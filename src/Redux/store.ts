import { configureStore } from "@reduxjs/toolkit"
import info from './info/slice'
import filter from './filter/slice'
import data from './data/slice'

export const store = configureStore({
  reducer: {
    info,
    filter,
    data
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
