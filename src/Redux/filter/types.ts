export type FilterSliceState = {
    filterType: string,
    filterValue: string,
    additionalFilters: {
        attack: number | null,
        cost: number | null,
        health: number | null,
        durability: number | null,
    }
}