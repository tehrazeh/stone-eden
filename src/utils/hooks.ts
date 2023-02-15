import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../Redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const DOTS = '...'
export const usePagination = (totalPages: number, currentPage: number) => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
}
    let displayedPages: Array<string | number> = [...pages]

if (currentPage >= 1 && currentPage <= 3) { // [1, 2, 3 ... last page]
    displayedPages = [1, 2, 3, 4, DOTS, totalPages]
    } else if (currentPage >= 4 && currentPage < pages.length - 2) { // [1 ... 2, 3, 4 ... last page]
    const slicedPortion = pages.slice(currentPage -2, currentPage + 1) // 3 middle buttons (2, 3, 4)^
    // left DOTS betwen 1 and 2 bc of the screenshot on github
    displayedPages = [1, DOTS, ...slicedPortion, DOTS, totalPages]
    } else if (currentPage >= pages.length - 2) { // [1 ... last page -2, last page -1, last page]
    const slicedPortion = pages.slice(pages.length - 4) // [last page -2, last page -1, last page]
    displayedPages = [1, DOTS, ...slicedPortion]
    }

    return displayedPages
}