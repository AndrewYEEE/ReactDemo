import {combineReducers, createStore} from "redux";
import {itemReducer,LoginReducer} from "./reducer.js";

const Store = createStore(combineReducers({
    itemReducer,
    LoginReducer,
}));

// const Store = createStore(LoginReducer);

export default Store;
