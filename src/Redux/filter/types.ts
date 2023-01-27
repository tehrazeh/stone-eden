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
    value: number | string,
}