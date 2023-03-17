
export const Footer: React.FC = () => {
  return (
    <div className='bg-neutral-900 flex justify-center flex-col items-center text-xs text-gray-400'>
      <p>tehrazeh dev, 2022</p>
      <p> Data provided by <a className='text-gray-200 hover:underline'
        href='https://rapidapi.com/omgvamp/api/hearthstone'>Hearthstone</a> and <a
          className='text-gray-200 hover:underline'
          href='https://hearthstonejson.com/docs/images.html'>HearthstoneJSON</a></p>
    </div>
  )
}

export default Footer