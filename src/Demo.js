import React, { Component } from 'react';

class Demo extends Component{
    constructor(porps){
        super(porps)
        this.state = {
            time: new Date()
        }
        // this.timeId = setInterval(()=>this.tick(),1000);
        this.timeId = setInterval(()=>this.tick(),1000)
    }
    tick(){
        this.setState({
            time: new Date()
        })
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('靜態生命週期函數');
        return null;
    }
    getSnapshotBeforeUpdate(){
        console.log('更新前獲取快照');
        return null;
    }
    render(){
        console.log('outrender');
        return(
            <div>
                <p>Demo</p>
                <p>{this.state.time.getSeconds()}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log('outcomponentDidMount');
    }
    shouldComponentUpdate(){
        console.log('outshouldComponentUpdate');
        return true;
    }
    componentDidUpdate(prevProps, prevState, info){
        console.log('outcomponentDidUpdate');
        // console.log(info);
    }
    componentWillUnmount(){
        console.log('outcomponentWillUnmount');
        clearInterval(this.timeId);
    }
}

export default Demo