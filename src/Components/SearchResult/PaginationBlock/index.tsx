import { useEffect } from "react"
import { Status } from "../../../Redux/info/types"
import { setTotalPages } from "../../../Redux/pagination/slice"
import { useAppDispatch, useAppSelector} from "../../../utils/hooks"
import ElementsNumber from "./dropdown"
import InputFilter from "./inputFilter"
import PaginationButtons from "./paginationButtons"

const Pagination = () => {

  // get data from state
  const {status} = useAppSelector(state => state.data)
  const {displayedItems} = useAppSelector(state => state.pagination)

  const dispatch = useAppDispatch()

  // update number of pages and set up number of pages for the first render
  useEffect(() => {
    dispatch(setTotalPages(displayedItems))
}, [dispatch, displayedItems])


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