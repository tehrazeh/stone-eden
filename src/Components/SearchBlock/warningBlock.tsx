import React from 'react'
import warningImg from '../../Assets/warning.png'

const WarningBlock: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="rounded border-2 bg-red-900 w-48 h-14 flex justify-center items-center
                border-red-500 text-red-300">
      <img src={warningImg} className='w-12' alt='warning' />
      <p className="flex justify-center text-sm leading-4 items-center text-center">{text}</p>
      <img src={warningImg} className='w-12' alt='warning' />
    </div>
  )
}

export default WarningBlock