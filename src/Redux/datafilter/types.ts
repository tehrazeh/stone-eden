export type DataFilterSliceState = {
    nameFilter: string
    sortFilter: DataSort
}

export enum DataSort {
    COST_DESC = 'cost desc',
    COST_ASC = 'cost asc',
    HEALTH_DESC = 'health desc',
    HEALTH_ASC = 'health asc',
    ATTACK_DESC = 'attack desc',
    ATTACK_ASC = 'attack asc',
    DEFAULT = 'default'
}