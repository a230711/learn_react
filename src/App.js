import React, { Component } from "react";
// // import Button, {Nav} from "./Test/Button";
// import Thisuse from './Thisuse';

// // class Nav extends Component{
// //   constructor(){
// //     super()
// //   }
// //   render(){
// //     return(
// //       <div style={{backgroundColor:"black", width:"100%", color:"white"}}>Nav</div>
// //     )
// //   }
// // }
// // function Button(){
// //   return(
// //     <button type="button">click</button>
// //   )
// // }

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       like : true
//     }
//   }
//   hander(){
//     this.setState({
//       like: !this.state.like
//     })
//   }
//   render(){
//     return(
//       <Thisuse />
//       // <div>
//       //   <Nav />
//       //   <Button/>
//       //   <Button/>
//       //   <Button/>
//       //   <Button/>
//       //   <button type="button"
//       //     onClick={()=>{
//       //       this.hander()
//       //     }}
//       //   >
//       //   {this.state.like?"like":"Thank"}
//       //   </button>
//       // </div>
      
//     )
//   }
// }

// import React, {useState} from "react";
// // import FunctionContextComponent from './FunctionContextComponent';
// import ClassContextComponent from './ClassContextComponent';

// export const ThemeContext = React.createContext()

// export default function App(){
//   const [darkTheme, setDarkTheme] = useState(true)

//   function toggleTheme(){
//     setDarkTheme(prevDarkTheme => !prevDarkTheme)
//   }
//   return (
//     <>
//       <ThemeContext.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         {/* <FunctionContextComponent /> */}
//         <ClassContextComponent />
//       </ThemeContext.Provider>
//     </>
//   )
// }

// import React from "react";
// import FunctionContextComponent from './FunctionContextComponent';
// import ClassContextComponent from './ClassContextComponent';
// import { ThemeProvider } from "./ThemeContext";

// export default function App(){
//   return (
//     <>
//       <ThemeProvider>
//         <FunctionContextComponent />
//       </ThemeProvider>
//     </>
//   )
// }


// import { useState, createContext, Children } from 'react';
// import {A} from './A';
// import B from './B';

// export const ThemeContext = createContext(); 
// function App(){

//   const [ dark, setDark ] = useState(true);
//   return (  
//     <>
//     <ThemeContext.Provider value={{setDark}}>
//       <A dark={dark}/>
//       <B dark={dark}/>
//     </ThemeContext.Provider>
//     </>
//   );
// };
// export default App;

import { useState } from "react";
import Input from "./Input";

function App(){
  const [ updata, setUpdata ] = useState(true)
  console.log('父組件')
  return(
    <>
      <p onClick={()=>{setUpdata(!updata)}}>Click</p>
      <Input/>
    </>
  )
}

export default App