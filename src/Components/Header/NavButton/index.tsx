import { NavLink } from "react-router-dom"

type NavButtonProps = {
    title: string
}
 const NavButton = (props: NavButtonProps) => {

  return (
    // add routing to use navlinks
    // <NavLink to='/' className='m-4 bg-lime-900'>{props.title}</NavLink>
    <button className='m-4 bg-lime-900'>{props.title}</button>
  )
}

export default NavButton