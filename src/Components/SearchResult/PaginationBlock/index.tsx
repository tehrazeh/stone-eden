import { Status } from "../../../Redux/info/types"
import { useAppSelector} from "../../../utils/hooks"
import ElementsNumber from "./dropdown"
import InputFilter from "./inputFilter"
import PaginationButtons from "./paginationButtons"

const Pagination = () => {
  const {status} = useAppSelector(state => state.data)


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