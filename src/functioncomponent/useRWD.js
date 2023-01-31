import { useState, useEffect } from 'react';

/*
window.innerWidth取得目前視窗寬度
如果視窗寬度改變，會以'resize'事件觸發event
*/

const useRWD=()=>{
    const [device,setDevice]=useState("mobile");
    const handleRWD=()=>{ //視窗寬度門檻
        if(window.innerWidth > 768) {
            setDevice("PC");
        } else if (window.innerWidth > 576) {
            setDevice("tablet");
        } else {
            setDevice("mobile");
        }
    }

    useEffect(()=>{ 
        //componentDidMount
        handleRWD(); //先觸發一次 (這裡雖然有更新到State，但我們知道setState是非同步的，所以下面的addlistener還是會運行到)
        window.addEventListener('resize',handleRWD);  //在畫面渲染後，掛載事件監聽，並在觸發時改變state
        return(()=>{
            //componentWillUnmount
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return device;
}

export default useRWD;