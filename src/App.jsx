import React, { useState } from 'react';
import './App.css';
import bgImg from './assets/bg.png'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: newTask,
          createdAt: new Date().toLocaleString(),
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const markTaskAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const renderTasks = (completed) =>
    tasks
      .filter((task) => task.completed === completed)
      .map((task) => (
        <div key={task.id} className={`task ${completed ? 'completed' : ''}`}>
          <span className="task-text">{task.text}</span>
          <span className="task-date">{task.createdAt}</span>
          {!completed && (
            <button
              className="mark-done-button"
              onClick={() => markTaskAsDone(task.id)}
            >
              Mark as Done
            </button>
          )}
        </div>
      ));

  return (
    <div className="App">
      <div className="container">
      </div>
      <div className="todowrapper">
        <div className="titleBox">
          <span className="title">LoveTodo</span>
        </div>
        <div className="inputBox">
          <input type="text" className='todoinput' placeholder='Add a new task' />
          <span className="material-symbols-outlined send" >
            send
          </span>
        </div>
        <div className="todoDisplayBox">
          <div className="info">
            <div className="infoWrapper">
              <span className="infoItem">Created Tasks: </span><div className="createdList">1</div>
            </div>
            <div className="infoWrapper">
              <span className="infoItem">Completed Tasks:</span><div className="createdList">1/1</div>
            </div>
          </div>
          <hr />

          <div className="todoItem">
            <div className="todoItemWrapper">
              <div className="checkbox">
                <span class="material-symbols-outlined check">
                  check_circle
                </span>
              </div>
              <div className="todoDetails">
                <span className="todoTitle">Morning Walk</span>
                <span className="todoTime">21:09pm</span>
              </div>
              <div className="action">
                <span class="material-symbols-outlined check">
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="love">
        <span className="author">Made with <span className="emoji">❤️</span> Abhishek</span>
      </div>
    </div>
  );
}

export default App;
