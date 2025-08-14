import { useState } from 'react';
import '../src/css/AddTask.css';

export default function AddTask({ modalOpen, handleClose, setTodoList }) {
  const [priority, setPriority] = useState("Low"); 

  if (!modalOpen) return null;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("task");

    if (!title.trim()) return;

    setTodoList(prevTodo => [
      {
        id: prevTodo.length+1, 
        title, 
        priority, 
        status: "To Do", 
        completed: false
      },...prevTodo
    ]);

    handleClose(); 
    setPriority("Low"); 
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="add-task">
            <div className="add-task-title">
              <span>Add Task</span>
              <img 
                onClick={handleClose} 
                src="../src/assets/close.png" 
                alt="close" 
              />
            </div>

            <div className="add-task-input">
              <span className="grayColor">Task</span>
              <input 
                name="task"
                placeholder="Type your task here..." 
                type="text" 
              />
            </div>

            <div className="add-task-priority">
              <span className="grayColor">Priority</span>
              <ul className='priority-buttons'>
                {["High", "Medium", "Low"].map(level => (
                  <li 
                    key={level} 
                    onClick={() => setPriority(level)}
                    className={`${priority === level ? "selected" : ""} ${level.toLowerCase()}`}
                  >
                    {level}
                  </li>
                ))}
              </ul>
            </div>

            <div className="add-task-button">
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
