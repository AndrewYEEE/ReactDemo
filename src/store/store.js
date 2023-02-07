import { createStore } from "redux";
import { counterReducer } from "./reduce";

const CounterStore = createStore(counterReducer);
export default CounterStore;