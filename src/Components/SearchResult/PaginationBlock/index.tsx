import { useEffect, useState } from "react"
import { useAppSelector } from "../../../utils/hooks"

const Pagination = () => {
    const cards = useAppSelector(state => state.data.data)
    const [pageSize, setPageSize] = useState(10)
    const [totalPages, setTotalPages] = useState(Math.ceil(cards.length / pageSize))
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        setTotalPages(Math.ceil(cards.length / pageSize))
    }, [cards.length, pageSize])
  return (
    <div>
        <p>pagesize: {pageSize}</p>
        <p>totalPages: {totalPages}</p>
        <p>current page: {currentPage}</p>
        <p>total items: {cards.length}</p>
    </div>
  )
}

export default Pagination