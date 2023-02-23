import { useEffect } from "react"
import { Status } from "../../../Redux/info/types"
import { setTotalPages, setTotalItems } from "../../../Redux/pagination/slice"
import { useAppDispatch, useAppSelector} from "../../../utils/hooks"
import ElementsNumber from "./dropdown"
import InputFilter from "./inputFilter"
import PaginationButtons from "./paginationButtons"

const Pagination = () => {
  const {status, data} = useAppSelector(state => state.data)
  const displayedItems = useAppSelector(state => state.pagination.displayedItems)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTotalItems(data.length))
    dispatch(setTotalPages(displayedItems))
}, [data, dispatch, displayedItems])


  if (status === Status.LOADING) { 
    return <div>Loading...</div>
  }

      return (
          <div className="grid w-11/12 rounded grid-cols-2 grid-rows-1">
            <div>
              <InputFilter/>
            </div>
            <div className="flex justify-between items-center">
              <PaginationButtons/>
              <ElementsNumber/>
            </div>
          </div>
      )
    }

export default Pagination