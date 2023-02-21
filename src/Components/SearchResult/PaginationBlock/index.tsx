import { Status } from "../../../Redux/info/types"
import { useAppSelector} from "../../../utils/hooks"
import ElementsNumber from "./dropdown"
import PaginationButtons from "./paginationButtons"

const Pagination = () => {
  const {status} = useAppSelector(state => state.data)


  if (status === Status.LOADING) { 
    return <div>Loading...</div>
  }

      return (
          <div className="flex bg-slate-700 rounded justify-center items-center">
            {/* move buttons below to its own component, create input to filter the cards */}
            <PaginationButtons/>
            <ElementsNumber/>
          </div>
      )
    }

export default Pagination