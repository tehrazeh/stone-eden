import NavButton from "./NavButton"
export const Header: React.FC = () => {

  const navButtons = [
    { name: 'Classes' },
    { name: 'Races' },
    { name: 'Qualities' },
    { name: 'Types' },
    { name: 'Sets' },
  ]

  const buttonElems = navButtons.map((item) => {
    return <NavButton title={item.name} key={item.name} />
  })

  return (
    <div className='bg-neutral-800 h-16 flex justify-center items-center'>{buttonElems}</div>
  )
}

export default Header