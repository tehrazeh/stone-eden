import NavButton from "./NavButton"
export const Header: React.FC = () => {

  const navButtons = [
    {name: 'Class'},
    {name: 'Race'},
    {name: 'Quality'},
    {name: 'Type'},
    {name: 'Set'},   
  ]

  const buttonElems = navButtons.map((item) => {
    return <NavButton title={item.name} key={item.name}/>
  })


  return (
    <div className='bg-blue-300 h-14'>{buttonElems}</div>
  )
}

export default Header