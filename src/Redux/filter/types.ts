export type FilterSliceState = {
    filterType: string,
    filterValue: string,
    additionalFilters: AdditionalFilters
}

type AdditionalFilter = {
    value: number | string,
    isValid?: boolean
}

export type Params = {
    type?: string,
    value: string,
    attack?: string,
    cost?: string,
    health?: string,
    durability?: string
}

export type AdditionalFilterAction = {
    filterValue: keyof FilterSliceState["additionalFilters"],
    value: string,
}

export type AdditionalFilters = {
        attack: {value: string, isValid: boolean},
        cost: {value: string, isValid: boolean},
        health: {value: string, isValid: boolean},
        durability: {value: string, isValid: boolean}  
}