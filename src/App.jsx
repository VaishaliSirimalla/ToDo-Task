import { useState } from 'react'
import Task from '../components/Task'
import Header from '../components/Header'
import './App.css'
import initialTasks from '../data'
import AddTask from '../components/AddTask'

function App() {
  const [todoList, setTodoList] = useState(initialTasks)
  const [modalOpen, setModalOpen] = useState(false)
  const [editTask, setEditTask] = useState(null)

  const handleClose = () => {
    setModalOpen(false)
    setEditTask(null) // reset after close
  }

  const handleOpen = (task = null) => {
    setEditTask(task)  // null → add, object → edit
    setModalOpen(true)
  }

  const eachTask = todoList.map((todo) => (
    <Task 
      key={todo.id}
      {...todo}
      onEdit={() => handleOpen(todo)}   // click edit
    />
  ))

  return (
    <div className="container">
      <Header modalOpen={modalOpen} handleOpen={() => handleOpen()} />
      <main className="taskContainer">
        {eachTask}
      </main>
      <AddTask 
        modalOpen={modalOpen} 
        handleClose={handleClose} 
        setTodoList={setTodoList} 
        editTask={editTask}   // 👈 pass here
      />
    </div>
  )
}

export default App
