import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
//import App from "./App";

// const text = 'h1 moron'
// const elem = (
//   <div>
//     <h1 className='text'>text: {text} </h1>
//     <input type='text' />

//     <button tabIndex='0'>Help me pls</button>
//     <p><input type="radio" name='1' id='radio1' />
//       <label htmlFor="radio1">yes</label></p>
//     <p><input type="radio" name='1' id='radio2' />
//     <label htmlFor="radio2">no</label></p>
//   </div>
// );

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,

  document.getElementById("root")
);
