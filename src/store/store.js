import { combineReducers, createStore } from "redux";
import matrixReducer from "./matrix-reducer/reducer";

const store = combineReducers({
  matrix: matrixReducer,
});

export default createStore(store);
