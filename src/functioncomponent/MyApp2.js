import { useState } from 'react';
const MyAPP2 = (props)=>{
    const [name ] = useState(props.name);
    const [percent , setPercent] = useState(props.value);
    return(
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                <div className="progress-bar" style={{backgroundColor:"#fe5196",width: percent, height:"100%",borderRadius:"10px"}}></div>
            </div>
            <button onClick={()=>setPercent("70%")}>{name}</button>
        </div>
    );
    
}
export default MyAPP2;