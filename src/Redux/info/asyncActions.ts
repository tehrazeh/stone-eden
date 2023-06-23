import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Info } from "./types";
const options = {
  method: "GET",
  url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_KEY,
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};
export const fetchInfo = createAsyncThunk<Info>("info/fetchInfo", async () => {
  const { data } = await axios.request<Info>(options);
  return data;
});
