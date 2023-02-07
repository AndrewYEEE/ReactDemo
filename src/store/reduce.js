const initialState = {
    counter: 0,
    showCounter: true,
}

const COUNTER_ACTION = {
    INCREMENT:"INCREMENT",
    INCREASE: "INCREASE",
    DECREMENT:"DECREMENT",
    TOGGLE:"TOGGLE",
}


const counterReducer = (state=initialState,action)=>{
    const stateNext = Object.assign({},state);
    switch (action.type){
        case COUNTER_ACTION.INCREMENT:
            stateNext.counter = stateNext.counter+1;
            return stateNext
        case COUNTER_ACTION.INCREASE:
            stateNext.counter = stateNext.counter+action.amount;
            return stateNext
        case COUNTER_ACTION.DECREMENT:
            stateNext.counter = stateNext.counter-1;
            return stateNext
        case COUNTER_ACTION.TOGGLE:
            stateNext.showCounter = !stateNext.showCounter;
            return stateNext
        default:
            return state
    }
};

export {counterReducer, COUNTER_ACTION}