import { useState } from "react";
import React from "react";

function App() {
  const [headingName, setHeadingName] = useState("");
  const [headingSurname, setHeadingSurname] = useState("");

  function handleChangeName(event) {
    setHeadingName(event.target.value);
  }
  function handleChangeSurname(event) {
    setHeadingSurname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {headingName} {headingSurname}
      </h1>
      <input onChange={handleChangeName} type="text" placeholder="Name?" />
      <input
        onChange={handleChangeSurname}
        type="text"
        placeholder="Surname?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
