import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./toolkit_reducer";
import { loginReducer } from "./toolkit_reducer";

const reducer = {
    login: loginReducer,
    counter: counterReducer,
  }

const ToolKitStore = configureStore({
    reducer
});
  
export default ToolKitStore;
