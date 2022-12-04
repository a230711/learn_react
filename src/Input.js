import { Component } from "react";

class Input extends Component{
    constructor(){
        super()
        this.state = {
            like : false
        }
    }
    hanld(){
        this.setState({like:!this.state.like});
    }
    render(){
        console.log("子元件")
        return(
            <div onClick={()=>{this.hanld()}}>aaaaa</div>
        )
    }
}

export default Input