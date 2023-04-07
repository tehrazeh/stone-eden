import { Card } from "../data/types"

export type PaginationSliceState = {
    currentPage: number
    elementsPerPage: number
    totalPages: number
    totalItems: number 
    displayedItems: number
    infiniteScroll: boolean 
    infinitePile: Card[]
}