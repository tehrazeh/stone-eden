import { NavLink } from "react-router-dom"

type NavButtonProps = {
    title: string
}
 const NavButton: React.FC<NavButtonProps> = (props) => {
  return (
    <NavLink to={`/search/${props.title.toLowerCase()}`}
      className={({ isActive }) => isActive ? 'button-active' : 'button-regular' }>
      {props.title}
    </NavLink>
  )
}

export default NavButton