import React, {Component} from "react";

export default class Thisuse extends Component{
    constructor(){
        super()
    }
    hanleClick(){
        console.log('click this button');
    }
    render(){
        return(
            <button type="button" onClick={()=>{this.hanleClick()}}>Click</button>
        )
    }
}