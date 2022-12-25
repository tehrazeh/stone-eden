import { NavLink } from "react-router-dom"

type NavButtonProps = {
    title: string
}
 const NavButton: React.FC<NavButtonProps> = (props) => {

  return (
    // add routing to use navlinks
    <NavLink to='/filter' className='m-4 bg-lime-900'>{props.title}</NavLink>
  )
}

export default NavButton