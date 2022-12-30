import { NavLink } from "react-router-dom"

type NavButtonProps = {
    title: string
}
 const NavButton: React.FC<NavButtonProps> = (props) => {

  const activeStyle = `mx-4 text-emerald-200 uppercase bg-emerald-800
  p-1 rounded transition-all duration-200 ease-linear w-20
  flex justify-center items-center shadow-lg`

  const regularStyle = `mx-4 text-emerald-300 p-1 uppercase bg-stone-700
  rounded shadow-lg hover:text-emerald-200 hover:scale-125 transition-all
  duration-200 ease-linear w-20 flex justify-center items-center`

  return (
    <NavLink to={`/${props.title}`}
      className={({ isActive }) => isActive ? activeStyle : regularStyle }>
      {props.title}
    </NavLink>
  )
}

export default NavButton