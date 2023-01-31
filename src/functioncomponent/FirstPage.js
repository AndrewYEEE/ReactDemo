import './FirstPage.css';
import { Link } from 'react-router-dom';
const FirstPage=()=>{
    const StyleSheet = {
        width:"100vw",
        height: "100vh",
        backgroundColor:"#FF2E63",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"column",
    }
    return (
        <div style={StyleSheet}>
            <nav id = "navId">
                <Link to="/">點我連到第一頁</Link>
                <Link to={{
                    pathname:'/second/helloworld',
                }} state={{
                    title: 'foo',
                }} style={{marginLeft:"20px"}}>點我連到第二頁</Link>
            </nav> 
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第一頁</h1>
        </div>
    )
}

export default FirstPage;