import React, { useState } from "react";

function App() {
  const [info, setInfo] = new useState("");
  const [todo, setTodo] = new useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInfo(value);
  }

  function handleClick() {
    setTodo((preValue) => {
      return [...preValue, info];
    });
    setInfo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={info} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todo.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
