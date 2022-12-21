import React, { Component } from "react";
// import Btn from './Btn';
// import Demo from './Demo';
// import './App.scss'
// import PropTypes from "prop-types";

const ThemeContext = React.createContext()
class App extends Component{
  // static childContextTypes = {
  //   themeColor : PropTypes.string,
  //   handleChangeThemeColor : PropTypes.func
  // }
  constructor(){
    super()
    this.state = {
      themeColor : 'red'
    }
  }
  handleChangeThemeColor(color){
    this.setState({
      themeColor : color
    })
  }
  // getChildContext(){
  //   return {
  //     themeColor : this.state.themeColor,
  //     handleChangeThemeColor : (color)=>this.handleChangeThemeColor(color)
  //   }
  // }
  render(){
    return(
      <ThemeContext.Provider value={{themeColor:this.state.themeColor,handleChangeThemeColor : (color)=>this.handleChangeThemeColor(color)}}>
        <Title></Title>
        <Button></Button>
      </ThemeContext.Provider>
      // <div>
        // <Title></Title>
        // <Button></Button>
      // </div>
    )
  }
}
// App.childContextTypes = {
//   themeColor : PropTypes.string,
//   handleChangeThemeColor : PropTypes.func
// }

class Title extends Component{
  // static contextTypes = {
  //   themeColor : PropTypes.string,
  //   handleChangeThemeColor : PropTypes.func
  // }
  static contextType = ThemeContext;
  render(){
    // console.log(this.props);
    console.log(this.context);
    const {themeColor, handleChangeThemeColor} = this.context
    return(
      <h1 style={{color : themeColor}}>大標題</h1>
    )
  }
}
// Title.contextTypes = {
//   themeColor : PropTypes.string,
//   handleChangeThemeColor : PropTypes.func
// }

class Button extends Component{
  // static contextTypes = {
  //   themeColor : PropTypes.string,
  //   handleChangeThemeColor : PropTypes.func
  // }
  static contextType = ThemeContext
  render(){
    const {themeColor, handleChangeThemeColor} = this.context
    return(
      <div>
        <button type="button" style={{color : themeColor}}
        onClick={()=>{handleChangeThemeColor('red')}}
        >Red</button>
        <button type="button" style={{color : themeColor}}
        onClick={()=>{handleChangeThemeColor('green')}}
        >Green</button>
      </div>
    )
  }
}
// Button.contextTypes = {
//   themeColor : PropTypes.string,
//   handleChangeThemeColor : PropTypes.func
// }

export default App