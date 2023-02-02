import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import NotFound from './NotFound';
import MyLayout2 from './MyLayout2';
import { useState } from "react";


const MyApp3 = () => {
    const [value, setValue] = useState("111");
    const [value2, setValue2] = useState("112");

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <MyLayout2 >
                        <FirstPage value={value} clickHandle={(e) => { setValue2(e.target.value) }} />
                    </MyLayout2>
                } />
                <Route exact path="/second/:id?" element={
                    <MyLayout2>
                        <SecondPage value={value2} clickHandle={(e) => { setValue(e.target.value) }} />
                    </MyLayout2>
                } />
                <Route path="*" element={
                    <MyLayout2>
                        <NotFound />
                    </MyLayout2>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default MyApp3;




<Switch>
    <Route path='/' component={InitHome} />
    <Route path='/about' component={About} />
    <Route path='/home' component={Home} />
</Switch>