import React from 'react'

const Todos = ({handleDeleteClick,task}) => {
  return (
    <div className='flex pt-2 pb-2 pl-2 pr-2 mb-4 justify-between items-center bg-slate-300 rounded-lg w-5/12'>
        <p>{task}</p>
    <div>
      <input type="checkbox"/> 
    <button className='bg-red-600 rounded-lg ml-2 pl-2 pr-2 pt-1 pb-1 w-20 ' onClick={() => handleDeleteClick(task.index)}>Delete</button>
    </div>
    </div>
  )
}

export default Todos