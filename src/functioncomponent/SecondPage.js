import React from 'react';
import { useLocation, useParams,useNavigate } from 'react-router-dom';
const SecondPage=(props)=>{
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    console.log(location)
    console.log(navigate)
    console.log(params)
    const { id } = useParams();
    const { state } = useLocation();
    return(
        <div>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁 {props.value}</h1>
            <button value={"789"} onClick={props.clickHandle}>button</button>
            <div>
                id: {id?id:""}
            </div>
            <div>
                state: {state?state.title:""}
            </div>
        </div>
    )
}

export default SecondPage;