export type DataFilterSliceState = {
    nameFilter: string,
    qualityFilter: string,
    sortFilter: DataSort,
    dropdownFilters: DropdownFilters
    visibilityChecks: VisibilityChecks,
    filterList: ['class', 'type', 'attribute'],
    activeFilters: string[]
}

export type VisibilityChecks = {
    attributeDropdownVisibility: boolean,
    typeDropdownVisibility: boolean,
    classDropdownVisibility: boolean
}

export type DropdownFilters = {
    typeFilter: string,
    classFilter: string
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