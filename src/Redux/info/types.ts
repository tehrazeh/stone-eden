export type Info = {
    classes: string[],
    factions: string[],
    locales: {},
    patch: string,
    qualities: string[],
    races: string[],
    sets: string[],
    standard: string[],
    types: string[],
    wild: string[],
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface InfoSliceState {
    info: Info | {},
    status: Status;
}

