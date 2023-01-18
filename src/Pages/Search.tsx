import { useEffect } from "react"
import Filter from "../Components/Filter"
import { useParams } from "react-router-dom"
import OptionalFilter from "../Components/OptionalFilter"
import { fetchInfo } from "../Redux/info/asyncActions"
import { useAppDispatch, useAppSelector } from "../utils/hooks"

const Search:React.FC = () => {
  const {type} = useParams()
  const {status} = useAppSelector((state) => state.info)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(status === 'loading') {
      dispatch(fetchInfo())
    }
  }, [status, dispatch])
  return (
    <>
    <div className='bg-stone-700 p-2 grid h-60 grid-cols-4 grid-rows-1 gap-4'>
      <div className='bg-stone-600 rounded col-span-3 overflow-y-auto'>
        <Filter type={(type) ? type : 'classes'}/>
      </div>
      <div className='bg-stone-600 rounded flex justify-center items-center flex-col'>
        <OptionalFilter />
      </div>  
    </div>   
    <div>bro this is seacrh my friend</div>
    </>
  )
}

export default Search