import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Note } from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note/>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export {App};
