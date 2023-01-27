import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Params } from "../filter/types"
import { Card, RequestOptions } from "./types"

export const fetchData = createAsyncThunk<Array<Card>, Params>(
  'data/fetchData', async (params: Params) => {
    const paramsType = params.type ? params.type.toLowerCase() : ''
    const paramsValue = params.value.split(' ').join('%20')
    const options: RequestOptions = {
      method: 'GET',
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${paramsType}/${paramsValue}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_KEY as string,
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    }

    if (Object.entries(params).length > 2) {
      let additionalParams: RequestOptions["params"] = {}
      let key: keyof typeof params
      for (key in params) {
        if (key !== 'type' && key !== 'value')
          additionalParams[key] = params[key]
      }
      options.params = additionalParams
    }
    const {data} = await axios.request<Array<Card>>(options)
    return data
  }
)
