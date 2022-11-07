//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react"
import ReactDOM from "react-dom"

let greetings = ""

const time = new Date(2020, 2, 2, 19)
const currentTime = time.getHours()

const currentStyle = {
  color: ""
}

if(currentTime < 12){
  greetings = "Good Morning"
  currentStyle.color = "red"

} else if(currentTime < 18){
  greetings = "Good Afternoon"
  currentStyle.color = "green"

} else{
  greetings = "Good Evening"
  currentStyle.color = "blue"

}

ReactDOM.render(
  <h1 className="heading" style={currentStyle}>{greetings}</h1>,
  document.getElementById("root")
)