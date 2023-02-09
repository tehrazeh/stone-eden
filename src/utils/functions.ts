import { Card } from "../Redux/data/types";

export const paginateArray = (arr: Card[], elementsPerPage: number, currentPage: number) => {
    const indexMin = currentPage * elementsPerPage
    const indexMax = indexMin + elementsPerPage
    return arr.filter((element, index) => index >= indexMin && index < indexMax)
}