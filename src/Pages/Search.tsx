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
    <div className="flex justify-center items-center flex-col">
    <div className='bg-stone-700 p-2 w-full grid h-60 grid-cols-4 grid-rows-1 gap-4'>
      <div className='bg-stone-600 rounded col-span-3 overflow-y-auto'>
        <Filter type={(type) ? type : 'classes'}/>
      </div>
      <div className='bg-stone-600 rounded flex justify-center items-center flex-col'>
        <OptionalFilter />
      </div>  
    </div>
    <button className='bg-yellow-900 m-2 border-yellow-600 h-14 w-40 text-yellow-600 text-lg
            border-solid border-2 rounded shadow-inner shadow-yellow-700
            hover:bg-yellow-800 hover:border-yellow-500 hover:text-yellow-500'>Search</button>   
    <div>bro this is seacrh my friend</div>
    </div>
  )
}

export default Search