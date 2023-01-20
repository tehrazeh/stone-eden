export type FilterSliceState = {
    filterType: string,
    filterValue: string,
    additionalFilters: {
        attack: number | string,
        cost: number | string,
        health: number | string,
        durability: number | string,
    }
    isValid: boolean
}

export type AdditionalFilterAction = {
    filterType: keyof FilterSliceState["additionalFilters"],
    value: number | string,
    isValid: boolean
}