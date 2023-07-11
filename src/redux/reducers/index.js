import cartReducer from "./cartReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cart: cartReducer,
});

export default rootReducers;
