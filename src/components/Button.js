import React from 'react'

const Button = ({name}) => {
  return (
    <div className='-z-10'>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-full'>{name}</button>
     </div>
  )
}

export default Button