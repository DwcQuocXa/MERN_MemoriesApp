import { combineReducers } from "redux";
import currentId from "./currentId";
import posts from "./posts";
import auth from "./auth";

export const reducers = combineReducers({
  posts: posts,
  currentId: currentId,
  auth: auth,
});
