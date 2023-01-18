import { NavLink } from "react-router-dom"
import { resetFilterValue } from "../../../Redux/filter/slice"
import {useAppDispatch} from '../../../utils/hooks'

type NavButtonProps = {
    title: string
}
 const NavButton: React.FC<NavButtonProps> = (props) => {
  const dispatch = useAppDispatch()
  return (
    <NavLink to={`/search/${props.title.toLowerCase()}`}
      className={({ isActive }) => isActive ? 'button-active' : 'button-regular' }
      onClick={() => {
        dispatch(resetFilterValue())
      }}>
      {props.title}
    </NavLink>
  )
}

export default NavButton