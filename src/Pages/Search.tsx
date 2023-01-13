import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import OptionalFilter from "../Components/OptionalFilter"
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
    <div className='bg-stone-700 pt-8 flex justify-center'>
    <Outlet/>
    <OptionalFilter />
    </div>   
    <div>bro this is seacrh my friend</div>
    </>
  )
}

export default Search