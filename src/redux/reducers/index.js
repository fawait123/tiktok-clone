import { combineReducers } from "redux";
import { auth } from "./auth";
import { post } from "./post";

const Reducer = combineReducers({
  auth,
  post,
});

export default Reducer;
