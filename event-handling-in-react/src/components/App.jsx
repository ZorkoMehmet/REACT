import { useState } from "react";
import React from "react";

function App() {
  const [headingName, setHeadingName] = useState("");
  const [headingSurname, setHeadingSurname] = useState("");

  
  const [isMouseOver, setMouseOver] = useState(false);
  const [inputedData, setInputtedData] = useState("");

  function btnClicked() {
    setHeadingName(inputedData);
    setHeadingSurname(inputedData);
  }

  function handleChange(event) {
    setInputtedData(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingName} {headingSurname}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Name?"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Surname?"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={btnClicked}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
