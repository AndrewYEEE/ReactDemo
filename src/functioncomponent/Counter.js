import { useDispatch, useSelector} from "react-redux";
import { COUNTER_ACTION } from "../store/reduce";
import { counterActions } from "../store/toolkit_reducer";

const Counter=()=>{
    //使用原始Redux
    // const show = useSelector((state)=>{ return state.showCounter});
    // const counter = useSelector((state)=>{return state.counter});
    
    //使用Redux-Toolkit
    const show = useSelector((state)=>{ return state.counter.showCounter});
    const counter = useSelector((state)=>{return state.counter.counter});
    const dispatch = useDispatch();

    return (
        <div>
            { show && <div>{counter}</div>}
            {/*  使用原始Redux
            <button onClick={()=>{dispatch({type:COUNTER_ACTION.INCREMENT})}}>Increment</button>
            <button onClick={()=>{dispatch({type:COUNTER_ACTION.INCREASE,amount:10})}}>Increase By 10</button>
            <button onClick={()=>{dispatch({type:COUNTER_ACTION.DECREMENT})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:COUNTER_ACTION.TOGGLE})}}>Toggle Counter</button> 
            */}
            {/* {//使用Redux-Toolkit} */}
            <button onClick={()=>{dispatch(counterActions.increment())}}>Increment</button>
            <button onClick={()=>{dispatch(counterActions.increase(10))}}>Increase By 10</button>
            <button onClick={()=>{dispatch(counterActions.decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(counterActions.toggleCounter())}}>Toggle Counter</button> 
        </div>
    )
}

export default Counter;