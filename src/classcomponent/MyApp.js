import { Component } from 'react'; //Class Component需要

class MyApp1 extends Component {
    constructor(props) { // 加入建構子以及props參數
        super(props);
        this.name = props.name;
        this.state={ // 宣告state物件，內包含一個變數percent
            percent: props.value 
          }
        this.changeName = this.changeName.bind(this); //由於js的this是浮動的，所以建議使用bind事先綁定，或是使用箭頭函式
        this.changePercent = this.changePercent.bind(this);
    }

    //練習生命週期Mount階段rendor之前邏輯處裡
    static getDerivedStateFromProps(props,state){    //<------在rendor渲染之前，用此函式改寫state (注意!!! 是每次渲染前都會執行，包含state update!!!!!)
        if(state.percent!=="70%") {
           return {percent:"90%"}   //注意!! 因為不能使用this.setState()改寫state，因此這裡使用return方式回傳要改的內容。
        }
        return state
    }

    changeName(newName){ // 定義changeName
        this.name=newName.target.value;
        document.getElementById('show-area').innerHTML=newName;
    }

    changePercent(){ //加入changePercent函式
        this.setState({
            percent:"70%"
        })
    }

    render(){ //Class Component需要用render()函式去收集要渲染到畫面上的東西
        return(
            <div>
                <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                    <div className="progress-bar" style={{backgroundColor:"#fe5196",width: this.state.percent, height:"100%",borderRadius:"10px"}}></div>
                </div>
                <button onClick={this.changePercent}>{this.name}</button>
            </div>
        );
    }
}
export default MyApp1;