import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import shops from "./shops";

const appReducers = combineReducers({
  auth,
  news,
  shops
});

export default appReducers;
