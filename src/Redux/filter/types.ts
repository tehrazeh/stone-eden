export type FilterSliceState = {
    filterType: string,
    filterValue: string,
    additionalFilters: {
        attack: AdditionalFilter,
        cost: AdditionalFilter,
        health: AdditionalFilter,
        durability: AdditionalFilter,
    }
}

type AdditionalFilter = {
    value: number | string,
    isValid: boolean
}

export type AdditionalFilterAction = {
    filterType: keyof FilterSliceState["additionalFilters"],
    value: number | string,
}