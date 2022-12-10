import { Component } from "react";

class Btn extends Component{
    constructor(){
        super()
        this.state = {
            time : new Date()
        }
    }
    tick(){
        this.setState({
            time: new Date()
        })
    }
    componentWillMount(){
        console.log('子組件將要安裝');
        this.thimeId = setInterval(()=>this.tick(),1000)
    }
    componentWillReceiveProps(){
        console.log('props的更新');
    }
    shouldComponentUpdate(nextprops, nextstate){
        console.log('組件應該更新');
        if(nextstate.time.getSeconds() % 2 == 0){
            return true
        }
        return false
    }
    componentWillUpdate(){
        console.log('強制更新組件');
    }
    componentDidUpdate(){
        console.log('組件完成更新');
    }
    componentWillUnmount(){
        console.log('將要卸載組件');
        clearInterval(this.thimeId)
    }
    render(){
        console.log('Btn的宣染')
        return(
            <div>
                <p>Btn</p>
                <p>{this.state.time.getSeconds()}</p>
                <button type="button" onClick={()=>this.setState({})}>Click1</button>
                <button type="button" onClick={()=>{this.forceUpdate()}}>Click</button>
            </div>
        )
    }
}

export default Btn