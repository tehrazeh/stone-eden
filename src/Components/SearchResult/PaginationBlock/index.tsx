import { useEffect } from "react"
import { setTotalPages } from "../../../Redux/pagination/slice"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks"
import ElementsNumber from "./dropdown"
import InputFilter from "./inputFilter"
import PaginationButtons from "./paginationButtons"

const Pagination = () => {

  // get data from state
  const { displayedItems } = useAppSelector(state => state.pagination)

  const dispatch = useAppDispatch()

  // update number of pages and set up number of pages for the first render
  useEffect(() => {
    dispatch(setTotalPages(displayedItems))
  }, [dispatch, displayedItems])


  return (
    <div className="grid w-full rounded grid-cols-7 grid-rows-1">
      <div className=" col-span-3">
        <InputFilter />
      </div>
      <div className="flex justify-end items-center col-span-4">
        <PaginationButtons />
        <ElementsNumber />
      </div>
    </div>
  )
}

export default Pagination