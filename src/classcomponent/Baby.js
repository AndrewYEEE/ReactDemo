import {Component} from "react";
import React from 'react';
class Baby extends Component{
  constructor(props) {
    super(props);
    this.state={
        isGetData: false,
        Mom: ""
    }
    this.ajaxSimulator=this.ajaxSimulator.bind(this)
    this.scrollTo=this.scrollTo.bind(this);
  }


    ajaxSimulator(){
        console.log("test")
        setTimeout(()=>{
            this.setState({isGetData:true, Mom:"小美"})
            console.log(this.state.Mom)
        },3000)
    }

    scrollTo(){
        /* 讀取 container元素的scrollLeft */
        let scrollLeft=document.getElementById('container').scrollLeft; 
        if(scrollLeft<300){
            /* 修改 container元素的scrollLeft */
            document.getElementById('container').scrollLeft=scrollLeft+5;
            setTimeout(this.scrollTo,20);
        }

    }

    componentDidMount(){
        this.ajaxSimulator();
        console.log("Did")
        this.scrollTo();  // 觸發開場動畫
    }


    render(){
        return(
            <div>
                <div id="msg">
                    {(this.state.isGetData===false)?"讀取中":"他的媽媽是"+this.state.Mom}
                </div>
                <div id="container" style={{width:"400px",overflowX:"scroll"}}>
                    <div id="left"  style={{width:"700px",fontSize:"30px",textAlign:"center"}}>
                        {"我是頭 O->---------------< 我是腳，我滑出來囉~ "}
                    </div>       
                </div> 
            </div>
        )

    }
}
export default Baby;