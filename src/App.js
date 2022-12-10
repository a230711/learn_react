import React, { Component } from "react";
import Btn from './Btn';

class App extends Component{
  constructor(porps){
    super(porps)
    this.state = {
      isIf : false
    }
  }

  componentWillMount(){
    console.log('組件將要安裝compontWillMount')
  }
  componentDidMount(){
    console.log('組件安裝完成compontDidMount')
  }

  render(){
    console.log('render')
    return(
      <div>
        {this.state.isIf ? <Btn /> : "不宣染"}
        <p>App</p>
        <button type="button" onClick={()=>this.setState({})}>App</button>
        <button type="button" onClick={()=>this.setState({isIf: !this.state.isIf})}>Alick</button>
      </div>
    )
  }
}

export default App