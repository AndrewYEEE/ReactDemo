import React from 'react';
import './FirstPage.css';
import {useLocation,useNavigate,useParams} from 'react-router-dom';
const FirstPage=(props)=>{
    return (
        <div >
            {/* <nav id = "navId">
                <Link to="/">點我連到第一頁</Link>
                <Link to={{
                    pathname:'/second/helloworld',
                }} state={{
                    title: 'foo',
                }} style={{marginLeft:"20px"}}>點我連到第二頁</Link>
            </nav>  */}
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第一頁 {props.value}</h1>
            <button value={"456"} onClick={props.clickHandle}>button</button>
        </div>
    )
}

export default FirstPage;