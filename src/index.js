import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Progress from './test/Progress';
import reportWebVitals from './reportWebVitals';
import MenuItem from './functioncomponent/MenuItem';
import MyButton from './functioncomponent/Mybuttom';
import MyLayout from './functioncomponent/MyLayout';
import MyApp1 from './classcomponent/MyApp';
import MyAPP2 from './functioncomponent/MyApp2';
import Baby from './classcomponent/Baby';
import PracticeApp1 from './functioncomponent/PracticeApp1';
import PracticeApp2 from './functioncomponent/PracticeApp2';
import { BrowserRouter,Route,Routes,Switch } from "react-router-dom";
import FirstPage from './functioncomponent/FirstPage';
import SecondPage from './functioncomponent/SecondPage';
import NotFound from './functioncomponent/NotFound';
import MyLayout2 from './functioncomponent/MyLayout2';
import MyApp3 from './functioncomponent/MyApp3';

const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}

const name="轉換百分比";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyLayout>
      <App />
      <Progress/>
      <div>
        <MenuItem name="我的名字" num={87}  />
      </div>
      <MyButton handleClick={printMessage} >在index.js中設定文字</MyButton>
      <div> Hello world!</div>
    </MyLayout>
    <MyApp1 name={name} value="10%"/>
    <MyAPP2 name={name} value="10%"/>
    <Baby/>
    <PracticeApp1/>
    <PracticeApp2/> */}
    <MyApp3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
