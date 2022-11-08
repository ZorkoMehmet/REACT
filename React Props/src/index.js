import React from "react";
import ReactDOM from "react-dom";


function Cards (props){
  <div>
    <h2>{props.name}</h2>
    <img {props.src}/>
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}
ReactDOM.render(
  <div>
  <h1>My Contacts</h1>
  <Cards name="Beyonce" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"/>
    
  </div>,
  document.getElementById("root")
);
