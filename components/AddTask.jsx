import { useEffect, useState } from 'react';
import '../src/css/AddTask.css';

export default function AddTask({ modalOpen, handleClose, setTodoList,editTask }) {
  const [priority, setPriority] = useState("Low"); 
  const [title, setTitle] = useState("")

   useEffect(() => {
    if (editTask) {
      setPriority(editTask.priority);
      setTitle(editTask.title);
    } else {
      setPriority("Low");
      setTitle("");
    }
  }, [editTask]);

  if (!modalOpen) return null;

  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const title = formData.get("task");

    if (!title.trim()) return;

    if (editTask) {
      // Update existing task
      setTodoList(prevTodo =>
        prevTodo.map(task =>
          task.id === editTask.id ? { ...task, title, priority } : task
        )
      );
    } else {
      // Add new task
      setTodoList(prevTodo => [
        {
          id: Date.now(),
          title,
          priority,
          status: "To Do",
          completed: false
        },
        ...prevTodo
      ]);
    }

    handleClose();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="add-task">
            <div className="add-task-title">
              <span>{editTask?"Edit Task":"Add Task"}</span>
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
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
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
              <button type="submit">{editTask?"Update":"Add"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
