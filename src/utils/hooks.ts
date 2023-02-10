import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../Redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



export const usePagination = (totalPages: number, currentPage: number) => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
}
}