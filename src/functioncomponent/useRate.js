import React from 'react';
import {useEffect,useState,useRef} from 'react';
const useRate=(value)=>{
    const [rate, setRate] = useState(0);
    const mounted = useRef();
    const tmID1 = useRef();
    const tmID2 = useRef();

    useEffect(()=>{
        if (!mounted.current){  //comoponentDidMount
            setRate(preRate => preRate = value);
            mounted.current=true;
        }else{   //componentDidUpdate
            if(rate > value){
                if (tmID1.current){
                    clearTimeout(tmID1.current);
                }
                tmID2.current = setTimeout(()=>{ setRate(preRate => preRate-1) },20);
            }
            else if (rate < value) {
                if (tmID2.current){
                    clearTimeout(tmID2.current);
                }
                tmID1.current = setTimeout(()=>{ setRate(preRate => preRate+1) },20);
            }
        }
    },[rate,value]);
    return rate;
}

export default useRate;

