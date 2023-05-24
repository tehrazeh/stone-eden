export type DataFilterSliceState = {
    nameFilter: string,
    sortFilter: DataSort,
    dropdownFilters: DropdownFilters
    visibilityChecks: VisibilityChecks,
    filterList: ['playerClass', 'type', 'attribute'],
    activeFilters: string[]
}

export type VisibilityChecks = {
    attributeDropdownVisibility: boolean,
    typeDropdownVisibility: boolean,
    playerClassDropdownVisibility: boolean
}

export type DropdownFilters = {
    typeFilter: string,
    playerClassFilter: string,
    rarityFilter: string
}

export enum DataSort {
    COST_DESC = 'cost_desc',
    COST_ASC = 'cost_asc',
    HEALTH_DESC = 'health_desc',
    HEALTH_ASC = 'health_asc',
    ATTACK_DESC = 'attack_desc',
    ATTACK_ASC = 'attack_asc',
    DEFAULT = 'attribute'
}