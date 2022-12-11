import React, { Component } from "react";
// import Btn from './Btn';
import Demo from './Demo';
import './App.scss'

class App extends Component{
  constructor(porps){
    super(porps)
    this.state = {
      isIf : false
    }
  }

  
  // componentWillMount(){
  //   console.log('組件將要安裝compontWillMount')
  // }
  // componentDidMount(){
  //   console.log('組件安裝完成compontDidMount')
  // }

  render(){
    console.log('render')
    return(
      <div className="app">
        {this.state.isIf ? <Demo /> : "不宣染"}
        <p>App</p>
        <button type="button" className="btn" onClick={()=>this.setState({})}>App</button>
        <button type="button" onClick={()=>this.setState({isIf: !this.state.isIf})}>Alick</button>
      </div>
    )
  }
}

export default App