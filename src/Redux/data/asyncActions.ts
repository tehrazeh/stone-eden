import { createAsyncThunk } from "@reduxjs/toolkit"
import { useAppSelector } from "../../utils/hooks"
import axios from "axios"
import { Params } from "../filter/types"
import { RequestOptions } from "./types"

// export const fetchData = createAsyncThunk<string, Params>(
//     'data/fetchData', async (params: Params) => {
//         console.log('zdarova')
//         const options = {
//             method: 'GET',
//             url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
//             headers: {
//             'X-RapidAPI-Key': process.env.REACT_APP_KEY,
//             'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
//             }
//           }
//         return options.url
//     }
// )

export const fetchData = (params:Params, filterType: string) => {
            const options: RequestOptions = {
            method: 'GET',
            url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${filterType.toLowerCase()}/${
                params.type.split(' ').join('%20')}`,
            headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_KEY as string,
            'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
          }

          if (Object.entries(params).length > 1) {
            let additionalParams: RequestOptions["params"] = {}
            let key: keyof typeof params
                for (key in params) {
                    if (key !== 'type')
                    additionalParams[key] = params[key]
                }
            options.params = additionalParams
          }
}

  