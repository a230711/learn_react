import React, {Component} from "react";

export default class Thisuse extends Component{
    constructor(){
        super()
        this.state = {
            value : "",
        }
    }
    hanleClick(e){
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return(
            <input type="text" onInput={(e)=>{this.hanleClick(e)}} value={this.state.value}/>
        )
    }
}