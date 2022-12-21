import React, { Component } from "react";
// import Btn from './Btn';
// import Demo from './Demo';
// import './App.scss'
import PropTypes from "prop-types";

// class Title extends Component{
//   // static contextTypes = {
//   //   themeColor : PropTypes.string,
//   //   handleChangeThemeColor : PropTypes.func
//   // }
//   render(){
//     console.log(this.props);
//     console.log(this.context);
//     const {themeColor, handleChangeThemeColor} = this.context
//     return(
//       <h1 style={{color : themeColor}}>大標題</h1>
//     )
//   }
// }
// // Title.contextTypes = {
// //   themeColor : PropTypes.string,
// //   handleChangeThemeColor : PropTypes.func
// // }

// class Button extends Component{
//   // static contextTypes = {
//   //   themeColor : PropTypes.string,
//   //   handleChangeThemeColor : PropTypes.func
//   // }
//   render(){
//     const {themeColor, handleChangeThemeColor} = this.context
//     return(
//       <div>
//         <button type="button" style={{color : themeColor}}
//         onClick={()=>{handleChangeThemeColor('red')}}
//         >Red</button>
//         <button type="button" style={{color : themeColor}}
//         onClick={()=>{handleChangeThemeColor('green')}}
//         >Green</button>
//       </div>
//     )
//   }
// }
// // Button.contextTypes = {
// //   themeColor : PropTypes.string,
// //   handleChangeThemeColor : PropTypes.func
// // }

// class App extends Component{
//   // static childContextTypes = {
//   //   themeColor : PropTypes.string,
//   //   handleChangeThemeColor : PropTypes.func
//   // }
//   constructor(){
//     super()
//     this.state = {
//       themeColor : 'red'
//     }
//   }
//   handleChangeThemeColor(color){
//     this.setState({
//       themeColor : color
//     })
//   }
//   // getChildContext(){
//   //   return {
//   //     themeColor : this.state.themeColor,
//   //     handleChangeThemeColor : (color)=>this.handleChangeThemeColor(color)
//   //   }
//   // }
//   render(){
//     return(
//       <div>
//         <Title></Title>
//         <Button></Button>
//       </div>
//     )
//   }
// }
// // App.childContextTypes = {
// //   themeColor : PropTypes.string,
// //   handleChangeThemeColor : PropTypes.func
// // }

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
      <ThemedAutton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  // static contextType = ThemeContext;
  render() {
    // return <Button theme={this.context} />;
    return <p>{this.context}</p>
  }
}
ThemedButton.contextType = ThemeContext;

class ThemedAutton extends React.Component {
  static contextType = ThemeContext;
  render(){
    return <p>{this.context}</p>
  }
}

export default App