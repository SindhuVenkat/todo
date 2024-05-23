import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todocontainer from './Todocontainer'
import Inputcontainer from './Inputcontainer'

function App() {
  const [task, setTask] = useState('')
  const[listoftasks, setListoftasks] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const showtasks = () => {
    if(task!==''){
    setListoftasks((listoftasks) => [...listoftasks, task])
    setTask('')
  }
  }

  const handleDeleteClick = (index) =>{
    setListoftasks(listoftasks.filter((id) => task.index !== index))
  }

  return (
    <>
      <div>
        <h1 className='text-5xl font-bold font-sans'>To Do List</h1>
        <Inputcontainer task={task} handleChange={handleChange} showtasks={showtasks} />
      
        {/* <div className='flex flex-col items-center justify-between'>
          <div className='mb-2 bg-zinc-50 p-4 rounded-lg w-5/12'>
            {listoftasks.map((task)=>{
            return <div> <span className='pr-3'>{task}</span> 
            </div>


          })}
          <div>
          <input type="checkbox"/> 
          <button className='bg-red-600 rounded-lg p-3 w-24 ' onClick={() => handleDeleteClick(task.index)}>Delete</button>
          </div>
          </div>
        </div> */}
        <Todocontainer listoftasks={listoftasks} handleDeleteClick={handleDeleteClick}  />
      </div>
    </>
  )
}

export default App
