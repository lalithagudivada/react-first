// import necessary file dependecies
import React from "react";
import ReactDOM from "react-dom";
// import './styles.css';
// import logo from './images/logo.png'
import Comment from "./Comment.js";
// import Welcome from "./Welcome.js";
import faker from "faker";
// import { Student, Branch } from "./Student.jsx";
//  function Comment() {
//   return(
//     <div class="ui comments">
//     <div class="comment">
//       <a class="avatar">
//         <img src="/images/avatar/small/elliot.jpg" />
//       </a>
//       <div class="content">
//         <a class="author">Elliot Fu</a>
//       </div>
//     </div>
//   </div>
//   )

//  }

//arrow function
const App = () => {
  return (
  <div>
    <Comment  name="svecw" location="bvrm"/>
  </div>
    
  )
};

// create a component
//  let college='svecw'
// let location ='bhimavaram'
// //  const msg= <h1>welcome</h1>
// function Welcome() {
//   // always first letter is capital
//   return (
//     // <h1>welcome to react</h1>
//     <div>
//     <h1 style={{ backgroundColor: "yellow" }}>welcome to the {college + '   '+ location}</h1>
//    <img src={logo}  />
//      {/* directly from public folder
//      <img src="./logo512.png" alt="" /> */}
//     <div className="mydiv">hi</div>
//     </div>
//   );
// }

//show it to the user
//render method responsible to show contet to user
ReactDOM.render(
  // fragment
  <>
    {/* <Welcome /> */}
    {/* <Student />
    <Branch /> */}
    {/* <Comment /> */}
    <App />
  </>,

  // <h1>welcome</h1>, // jsx extenson to java script
  // what u want display
  // msg,
  // where to display
  document.getElementById("root")
);
