// import React, { Component } from "react";
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

import React, {useState} from "react";
// import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext()

export default function App(){
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* <FunctionContextComponent /> */}
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  )
}

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

