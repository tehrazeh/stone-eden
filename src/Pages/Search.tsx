import { Outlet } from "react-router-dom"
import {useEffect} from 'react'
import axios from "axios"
const Search = () => {

  useEffect(() => {
    const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
    }
    async function getCard() {
    const {data} = await axios.request(options)
    }
    getCard()
    }, [])

  return (
    <>
    <Outlet/>   
    <div>bro this is seacrh my friend</div>
    </>
  )
}

export default Search