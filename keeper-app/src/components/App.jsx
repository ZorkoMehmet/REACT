import Footer from "./Footer";
import React from "react";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";



function App(item) {
  return (
    <div>
    <Header />
    {notes.map(noteItem => (
      <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />
    ))}
    <Footer />
  </div>
  );
}
export default App;
