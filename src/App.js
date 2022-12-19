import React, { Component } from "react";
// import Btn from './Btn';
import Demo from './Demo';
import './App.scss'

class Title extends Component{
  constructor(){
    super()
  }

  shouldComponentUpdate(nextProps){
    console.log(`nextprops:${nextProps.title}`);
    console.log(`props:${this.props.title}`);
    if(nextProps.title !== this.props.title){
      return true
    }
    return false
  }

  render(){
    return(
      <h1>{this.props.title}</h1>
    )
  }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'hello world1',
      num : 0
    }
  }

  render(){
    const {title, nun} = this.state;
    return(
      <div>
        <h1>{this.state.num}</h1>
        <Title title = {title}></Title>
        <button type="button"
        onClick={()=>{this.setState({num : this.state.num + 1})}}>
          Click
        </button>
        <button onClick={() => {
            this.setState({
                title: Math.random()
            })
        }}>change title</button>
      </div>
    )
  }
}

export default App