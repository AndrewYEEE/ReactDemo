import React from 'react';
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const ajaxSimulator = ()=> new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("後端資料");
    },2000);
});

const MyApp4 = ()=>{
    const [text, setText] = useState("設定文字");

    useEffect(()=>{
        ajaxSimulator().then((res)=>{ //接收resolve值
            setText(res)
        });
    },[]);

    return (
        <div>
            <button onClick={()=>{
                setText(Math.floor(Math.random()*10));
            }}>隨機設定文字</button>
            <MenuItem>{text}</MenuItem>
        </div>
    )
}

export default MyApp4;