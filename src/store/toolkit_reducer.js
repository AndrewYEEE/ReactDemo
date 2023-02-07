import { createSlice, createAction, createReducer } from '@reduxjs/toolkit';

//==============使用Action與Reducer==========//

const initLoginInfo = {
    account: '123',
    password: '456',
}

//建立Action
const LOGIN_SET_ACCOUNT = createAction("login/set/account");
const LOGIN_SET_PASSWORD = createAction("login/set/password");

const LoginReducer = createReducer(initLoginInfo,(builder)=>{
    builder
    .addCase(LOGIN_SET_ACCOUNT,(state,action)=>{
        state.account = action.payload; //直接叫payload的原因是因為會直接使用Action Creater做更改 ex: LOGIN_SET_ACCOUNT("123")
    })
    .addCase(LOGIN_SET_PASSWORD,(state,action)=>{
        state.password = action.payload; //直接叫payload的原因是因為會直接使用Action Creater做更改 ex: LOGIN_SET_PASSWORD("123")
    });
});


//==============使用createSlice==============//
const initialState = {
    counter: 0,
    showCounter: true,
};


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter+ action.payload; //直接叫payload的原因是因為會直接使用Action Creater做更改 ex: increase(10)
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export const loginReducer = LoginReducer;
export const loginActions = {LOGIN_SET_ACCOUNT, LOGIN_SET_PASSWORD};

