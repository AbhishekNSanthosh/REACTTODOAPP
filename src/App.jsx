import React from 'react';
import './App.css';

function App() { 
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

          <div className="todoItemCol">

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
      </div>
      <div className="love">
        <span className="author">Made with <span className="emoji">❤️</span> Abhishek</span>
      </div>
    </div>
  );
}

export default App;
