import { Card } from "../Redux/data/types";
import { DataSort } from "../Redux/datafilter/types";

export const paginateArray = (arr: Card[], elementsPerPage: number, currentPage: number) => {
    const indexMin = currentPage * elementsPerPage // start index of a portion that will be displayed
    const indexMax = indexMin + elementsPerPage // end index of a portion that will be displayed
    return arr.filter((element, index) => index >= indexMin && index < indexMax)
}

function sortByProperty(property: keyof Card, order: string) {
    const sortOrder = (order === 'asc') ? 1 : -1 // determine the order of filter
    return function (card1: Card, card2: Card) { // ?? -1 is default value if the property is not present
        const result = ((card1[property] ?? -1) < (card2[property] ?? -1)) ? -1
        : ((card1[property] ?? -1) > (card2[property] ?? -1)) ? 1 : 0
        return result * sortOrder // change the order of filter if necessary
    }
}

export const sortArray = (arr: Card[], defaultArr: Card[], sortFilter: DataSort) => {
    const arrCopy = [...arr] // make a copy to avoid mutation
    if (sortFilter === DataSort.DEFAULT) { // if the filter is back to default, we return the first version we got from api
        return [...defaultArr]
    }
    return arrCopy.sort(sortByProperty(sortFilter.split(' ')[0] as keyof Card, sortFilter.split(' ')[1]))
}