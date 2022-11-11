import { useState } from "react";
import React from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello!");
  const [isMouseOver, setMouseOver] = useState(false)


  function clicked() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
setMouseOver(isMouseOver.value ^= true)  }
 
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={clicked} onMouseOver={handleMouseOver} >
        Submit
      </button>
    </div>
  );
}

export default App;
