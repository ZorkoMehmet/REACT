import { useState } from "react";
import React from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function clickHandler(isDone) {
    setIsDone((isDone) => {
      return !isDone;
    });
  }

  return (
    <li
      onClick={clickHandler}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      onDoubleClick={() => {
      props.onDblClicked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
