import { configureStore } from "@reduxjs/toolkit"
import info from './info/slice'

export const store = configureStore({
  reducer: {
    info
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
