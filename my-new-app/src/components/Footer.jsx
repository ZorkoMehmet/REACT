import React from "react";
import ReactDOM from "react-dom/client";

const Footer = function () {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <footer>
      <p>Copyright {date}</p>
    </footer>
  );
};

export { Footer };
