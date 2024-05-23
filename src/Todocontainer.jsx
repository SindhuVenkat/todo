import React from 'react'
import Todos from './Todos' 

const Todocontainer = ({listoftasks, handleDeleteClick}) => {
  return (
    <div className='flex flex-col justify-between  items-center'>
   {listoftasks.map((task)=>{
    return <Todos task={task} handleDeleteClick={handleDeleteClick}/> 
   })} 
   </div>
  )
}

export default Todocontainer