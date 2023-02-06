import React from 'react';
import {useState} from 'react';
import ProgressDIY from '../classcomponent/ProgressDIY';
import ProgressDIYF from '../functioncomponent/ProgressDIYF';
import Cheer from '../functioncomponent/Cheer';
import { useSelector } from 'react-redux';
import {Provider, useDispatch} from 'react-redux';
import Store from '../model/store';

// const PracticeApp1 = ()=> {
//     const dispatch = useDispatch();
//     const [value,setValue] = useState(10);
//     const [score,setScore] = useState(0);
//     return(
//         <Provider store={Store}>
//             <ProgressDIYF value={value} sethandle={(e)=>{
//                 dispatch({type: LOGIN_ACTIONS.SET_ACCOUNT, value: "testtest"});
//                 setValue(e.target.value);
//             }}/>
//             <Cheer value={score} sethandle={(e)=>{setScore(e.target.value)}}/>
//         </Provider>
//     );
// }

const PracticeApp1 = ()=> {
    const [value,setValue] = useState(10);
    const [score,setScore] = useState(0);
    return(
        <>
            <ProgressDIYF value={value} sethandle={(e)=>{
                setValue(e.target.value);
            }}/>
            <Cheer value={score} sethandle={(e)=>{setScore(e.target.value)}}/>
        </>
    );
}

export default PracticeApp1;