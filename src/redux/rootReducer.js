import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

export const combinedReducers = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
});