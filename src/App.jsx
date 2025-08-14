import { useState } from 'react'
import Task from '../components/Task'
import Header from '../components/Header'
import './App.css'
import data from '../data'
import AddTask from '../components/AddTask'
import initialTasks from '../data'

function App() {
  // const [count, setCount] = useState(0)
  const [todoList, setTodoList] = useState(initialTasks)
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = ()=>{
    setModalOpen(false);
  }
  const handleOpen = ()=>{
    setModalOpen(true);
  }

  const eachTask = todoList.map((todo)=>{
    return (
      <Task 
        key={todo.id}
        title={todo.title}
        priority={todo.priority}
        status={todo.status}
        completed={todo.completed}
      />
    )
  })

  return (
    <>
      <div className="container">
        <Header modalOpen={modalOpen} handleOpen={handleOpen}/>
        <main className='taskContainer'>
          {eachTask}
        </main>
        <AddTask modalOpen={modalOpen} handleClose={handleClose} setTodoList={setTodoList}/>
      </div>
      
    </>
  )
}

export default App
