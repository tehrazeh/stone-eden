export type DataFilterSliceState = {
    nameFilter: string
    sortFilter: DataSort,
    typeFilter: string,
    classFilter: string
    visibilityChecks: VisibilityChecks,
    filterList: ['Class', 'Type']
}

export type VisibilityChecks = {
    attributeDropdownVisibility: boolean,
    typeDropdownVisibility: boolean,
    classDropdownVisibility: boolean
}

export enum DataSort {
    COST_DESC = 'cost_desc',
    COST_ASC = 'cost_asc',
    HEALTH_DESC = 'health_desc',
    HEALTH_ASC = 'health_asc',
    ATTACK_DESC = 'attack_desc',
    ATTACK_ASC = 'attack_asc',
    DEFAULT = 'Attribute'
}