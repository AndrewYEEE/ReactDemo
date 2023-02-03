import React from 'react';
import { useState,useEffect,useRef } from 'react';
import useRate from './useRate.js';

const ProgressDIYF=(props)=>{
    // const [percent,setPercent] = useState(0);
    // const tm=useRef();
    // const tmTwo=useRef();

    // const mounted=useRef();
    // useEffect(()=>{
    //     if(!mounted.current){ 
    //         //componentDidMount
    //         setPercent(prePercent => {prePercent = props.value});
    //         mounted.current=true;
    //     }
    //     else{  
    //         //componentDidUpdate
    //         if(percent>props.value){
    //             if(tm.current)
    //               clearTimeout(tm.current)
    //             tmTwo.current=setTimeout(()=>{setPercent(percent-1)},20);
    //         }
    //         else if(percent<props.value){
    //             if(tmTwo.current)
    //                 clearTimeout(tmTwo.current)
    //             tm.current=setTimeout(()=>{setPercent(percent+1)},20);
    //         }
    // }
    // },[props.value,percent]);
    const percent = useRate(props.value);



    return(
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
            </div>
            目前比率: {percent}%
            <button value={90} onClick={props.sethandle}>增加比率至90</button>
            <button value={10} onClick={props.sethandle}>減少比率至10</button>
        </div>
    )

}
export default ProgressDIYF;