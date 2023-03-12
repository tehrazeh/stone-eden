import React from 'react'
import warningImg from '../../Assets/warning.png'

const WarningBlock:React.FC<{text: string}> = ({text}) => {
  return (
    <div className="rounded border-2 bg-red-900 w-48 h-20 flex justify-center items-center
                border-red-500 text-red-300">
                    <img src={warningImg} className='w-14' alt='warning'/>
                    <p className="w-24 flex justify-center items-center text-center">{text}</p>
                    <img src={warningImg} className='w-14' alt='warning'/>
                </div>
  )
}

export default WarningBlock