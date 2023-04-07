import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { setCurrentPage } from "../../Redux/pagination/slice"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"

export const Footer: React.FC = () => {

  const { ref, inView } = useInView({
    threshold: 0
  })

  // getting displayed items as an additional condition to toggle footer (only if request was successful)
  const {displayedItems} = useAppSelector(state => state.pagination)
  const {currentPage, infiniteScroll, totalPages} = useAppSelector(state => state.pagination)
  const dispatch = useAppDispatch()
  useEffect(() => {

    // items are displayed
    if (inView && displayedItems > 0 && infiniteScroll && currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }, [inView])

  return (
    <div ref={ref}
      className='bg-neutral-900 flex justify-center flex-col mt-auto w-full items-center text-xs text-gray-400'>
      <p>tehrazeh dev, 2022</p>
      <p> Data provided by <a className='text-gray-200 hover:underline'
        href='https://rapidapi.com/omgvamp/api/hearthstone'>Hearthstone</a> and <a
          className='text-gray-200 hover:underline'
          href='https://hearthstonejson.com/docs/images.html'>HearthstoneJSON</a></p>
    </div>
  )
}

export default Footer