import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
const SecondPage=(props)=>{
    const { id } = useParams();
    const { state } = useLocation();
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#08D9D6",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
            {id?id:""}
            {state?state.title:""}
        </div>
    )
}

export default SecondPage;