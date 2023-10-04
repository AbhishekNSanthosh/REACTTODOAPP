import React, { useEffect, useState } from 'react';
import './App.css';
import nothingImage from './assets/nothing.png'

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('');
  const [todoStatus, setTodoStatus] = useState(false);

  const generateUniqueId = () => {
    // Generate a unique ID for each todo item (you can use a library like uuid)
    return new Date().getTime().toString();
  };

  //to get todos that are stored in localstorage.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos)
  }, [])

  //to store todo in localstorage
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);


  function HandleChange(e) {
    setTodo(e.target.value);
  }

  //add a todo
  function addTodo() {
    const newTodo = {
      id: generateUniqueId(),
      title: todo,
      date: new Date().toLocaleString(),
      isComplete: todoStatus
    }
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setTodo("")
    countAllTodos();
  }

  //get todo count
  const countAllTodos = () => todos.length;

  //get completed todo count 
  const countCompletedTodos = () => todos.filter((todo) => todo.isComplete).length;

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    countCompletedTodos()
  };

  //update the status of the todo
  const handleCompletion = (index) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === index) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
    countCompletedTodos()
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
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
          <button className='submitBtn' type='button' onClick={(e) => {
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
                          {task?.isComplete
                            ?
                            <span onClick={(e) => {
                              console.log("first")
                              handleCompletion(task?.id)
                            }} className="material-symbols-outlined check">
                              check_circle
                            </span>
                            :
                            <span onClick={(e) => {
                              console.log("first")
                              handleCompletion(task?.id)
                            }} className="material-symbols-outlined check">
                              radio_button_unchecked
                            </span>
                          }
                        </div>
                        <div className="todoDetails">
                          <span className="todoTitle">{task.title}</span>
                          <span className="todoTime">{task.date}</span>
                        </div>
                        <div className="action">
                          <span className="material-symbols-outlined check" onClick={(e) => {
                            e.preventDefault()
                            deleteTodo(task?.id)
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