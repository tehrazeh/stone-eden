import { Status } from "../info/types"

// create types for all types of cards with optional fields
export type DataSliceState = {
    status: Status
    url: string
}

export type RequestOptions = {
        method: string,
        url: string,
        params?: {
            cost?: string,
            attack?: string,
            health?: string,
            durability?: string
        },
        headers: {
          'X-RapidAPI-Key': string,
          'X-RapidAPI-Host': string
        }
}