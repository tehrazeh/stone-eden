import { useEffect, useState } from "react"
import Filter from "../Components/Filter"
import { useParams } from "react-router-dom"
import OptionalFilter from "../Components/OptionalFilter"
import { fetchInfo } from "../Redux/info/asyncActions"
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import SearchBlock from "../Components/SearchBlock"
import { setFilterType } from "../Redux/filter/slice"
import ResultBlock from "../Components/SearchResult/ResultBlock"
import { Status } from "../Redux/info/types"

const Search: React.FC = () => {
  const { type } = useParams()
  const { status } = useAppSelector((state) => state.info)
  const fetchStatus = useAppSelector((state) => state.data.status)

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchInfo())
      if (type) {
        dispatch(setFilterType(type))
      }
    }
  }, [status, dispatch, type])

  const [visibility, setVisibility] = useState(true)
  // className={`${(dropdownFilters.rarityFilter === element) ? 'brightness-[115%] scale-105' : 'brightness-[60%] hover:brightness-105'} 
  // w-11 cursor-pointer transition-all`}
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <div className={`${(visibility) ? '' : 'hidden'}
       bg-stone-900 px-2 pt-2 w-full h-[224px] grid grid-cols-4 grid-rows-1 gap-4 transition-all`}>
        <div className='bg-stone-700 h-full rounded col-span-3 overflow-y-auto'>
          <Filter type={(type) ? type : 'classes'} />
        </div>
        <div className='bg-stone-700 rounded flex justify-center items-center flex-col'>
          <OptionalFilter />
        </div>
      </div>

      <SearchBlock blockVisibility={visibility} toggleBlockVisibility={(changeVisibility) => setVisibility(changeVisibility)}/>

      {(fetchStatus === Status.SUCCESS || fetchStatus === Status.LOADING) && <ResultBlock />}
      {fetchStatus === Status.ERROR && <div>{fetchStatus}</div>}
    </div>
  )
}

export default Search