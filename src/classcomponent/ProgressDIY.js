import { Component } from 'react';
import React from 'react';
class ProgressDIY extends Component{
    constructor(props){
        super(props);
        this.state={
            percent: 0,
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    componentDidMount(){ //初始化
        this.setState({percent:this.props.value}) //建議使用componentDidMount，原因是有時候我們傳給元件的值是在這邊呼叫fetch去取得。
    }

    increase() {  //由於只改變自己的state，因此父元件不會Update
        const percent = this.state.percent + 1;
        this.setState({ percent },()=>{
            if (this.state.percent >= this.props.value) {
                return;
            }
            this.tm = setTimeout(this.increase, 20); //利用setTimeout預留20ms後會再次運行increase()，tm會記著timerID，方便取消
        });  //用第二參數(箭頭函式)取得更改後的state
    }

    decrease() {  //由於只改變自己的state，因此父元件不會Update
        const percent = this.state.percent - 1;
        this.setState({ percent },()=>{
            if (this.state.percent <= this.props.value) {
                return;
            }
            this.tmTwo = setTimeout(this.decrease, 20); //利用setTimeout預留20ms後會再次運行decrease()，tmTwo會記著timerID，方便取消
        });  
    }

    componentDidUpdate(prevProps, prevState){ //當props改變，或State改變時觸發
        if(prevProps.value>this.props.value){ //檢查props中value是否減少
            if(this.tm){  
                clearTimeout(this.tm); //目標value減少了，移除increase的setTimeout排程
            }
            this.decrease();  //減少
        }
        else if(prevProps.value<this.props.value){ //檢查props中value是否增加
            if(this.tmTwo) {
                clearTimeout(this.tmTwo); //目標value增加了，移除decrease的setTimeout排程
            }
            this.increase();  //增加
        }
    }

    render(){
        return(
            <div>
                <div className="progress-back" style={{ backgroundColor:"rgba(0,0,0,0.2)", width:"200px", height:"7px", borderRadius:"10px" }}>
                    <div className="progress-bar" style={{backgroundColor:"#fe5196", width:this.state.percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
                </div>
                目前比率: {this.state.percent}%
                <button value={90} onClick={this.props.sethandle}>增加比率至90</button>
                <button value={10} onClick={this.props.sethandle}>減少比率至10</button>
            </div>
        );
    }
}

export default ProgressDIY;