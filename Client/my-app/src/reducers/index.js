import { combineReducers } from "redux";
import currentId from "./currentId";
import posts from "./posts";

export const reducers = combineReducers({
  posts: posts,
  currentId: currentId,
});
