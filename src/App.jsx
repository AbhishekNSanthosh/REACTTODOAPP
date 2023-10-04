import React, { useState } from 'react';
import './App.css';
import nothingImage from './assets/nothing.png'

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function HandleChange(e) {
    setTodo(e.target.value);
  }

  //add a todo
  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: todo,
      date: new Date().toLocaleString(),
      isComplete: false
    }
    setTodos([...todos, newTodo]);
    setTodo("")
  }

  //get todo count
  const countAllTodos = () => todos.length;

  //get completed todo count 
  const countCompletedTodos = () => todos.filter((todo) => todo.completed).length;

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="container">
      </div>
      <div className="todowrapper">
        <div className="titleBox">
          <span className="title">LoveTodo</span>
        </div>
        <div className="inputBox">
          <input type="text" className='todoinput' value={todo} placeholder='Add a new task' onChange={(e) => (HandleChange(e))} />
          <button className='submitBtn' type='button' onClick={(e)=>{
            e.preventDefault()
            addTodo()
          }}> <span className="material-symbols-outlined send"  >
            send
          </span></button>
        </div>
        <div className="todoDisplayBox">
          {todos.length != 0 &&
            <>
              <div className="info">
                <div className="infoWrapper">
                  <span className="infoItem">Created Tasks: </span><div className="createdList">{countAllTodos()}</div>
                </div>
                <div className="infoWrapper">
                  <span className="infoItem">Completed Tasks:</span><div className="createdList">{countCompletedTodos()}/{countAllTodos()}</div>
                </div>
              </div>
              <hr />
            </>
          }

          {
            todos.length === 0 ?

              <div className="noDataCol">

                <img src={nothingImage} alt="hey" className='noData' />
                <span className="dataMsg">You haven't added any todos!</span>
              </div>

              :

              <div className="todoItemCol">

                {
                  todos && todos.map((task) => (

                    <div className="todoItem" key={task?.id}>
                      <div className="todoItemWrapper">
                        <div className="checkbox">
                          <span className="material-symbols-outlined check">
                            check_circle
                          </span>
                        </div>
                        <div className="todoDetails">
                          <span className="todoTitle">{task.title}</span>
                          <span className="todoTime">{task.date}</span>
                        </div>
                        <div className="action">
                          <span className="material-symbols-outlined check" onClick={() => {
                            deleteTodo(task.id)
                          }}>
                            delete
                          </span>
                        </div>
                      </div>
                    </div>

                  ))
                }



              </div>

          }
        </div>
      </div>
      <div className="love">
        <span className="author">Made with <span className="emoji">❤️</span> by  Abhishek</span>
      </div>
    </div>
  );
}

export default App;