import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { fetchInfo } from "../Redux/info/asyncActions"
import { useAppDispatch, useAppSelector } from "../utils/hooks"
const Search = () => {

  const status = useAppSelector((state) => state.info.status)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if(status === 'loading') {
      dispatch(fetchInfo())
    }
  }, [status, dispatch])
  return (
    <>
    <Outlet/>   
    <div>bro this is seacrh my friend</div>
    </>
  )
}

export default Search