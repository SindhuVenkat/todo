import React from 'react'

const Inputcontainer = ({task, showtasks, handleChange}) => {
  return (
    <div className=' mt-10 flex flex-col items-center justify-center'>
    <input className= "border-2  border-gray-100 w-80 pt-1 pb-1" value={task} onChange={(e) =>handleChange(e)} type="text"/>
    <button onClick={showtasks} className='bg-rose-900 w-8 h-8 rounded-full m-6'>+</button>
  </div>
  )
}

export default Inputcontainer