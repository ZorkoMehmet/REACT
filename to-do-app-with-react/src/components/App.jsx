import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);

  }

  const [items, setItems] = useState([]);

  function handleClick() {
    setItems((prevValue) => {
        return [...prevValue, inputValue]
    })
    setInputValue("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
