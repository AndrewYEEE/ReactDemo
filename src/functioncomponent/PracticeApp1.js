import React from 'react';
import {useState} from 'react';
import ProgressDIY from '../classcomponent/ProgressDIY';
import ProgressDIYF from '../functioncomponent/ProgressDIYF';
import Cheer from '../functioncomponent/Cheer';

const PracticeApp1 = ()=> {
    const [value,setValue] = useState(10);
    const [score,setScore] = useState(0);
    return(
        <>
            <ProgressDIYF value={value} sethandle={(e)=>{setValue(e.target.value)}}/>
            <Cheer value={score} sethandle={(e)=>{setScore(e.target.value)}}/>
        </>
    );
}

export default PracticeApp1;