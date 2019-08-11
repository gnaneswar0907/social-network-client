import { combineReducers } from "redux";
import { reducer } from "redux-form";

import UsersReducer from "./UsersReducer";
import MessageReducer from "./MessageReducer";
import PostsReducer from "./PostsReducer";
import AuthReducer from "./AuthReducer";

//------Changing Messages Color-------------

const changedColor = (color = "blue", action) => {
  if (action.type === "CHANGE_COLOR") {
    return action.payload;
  }
  return color;
};

export default combineReducers({
  form: reducer,
  auth: AuthReducer,
  posts: PostsReducer,
  user: UsersReducer,
  messages: MessageReducer,
  color: changedColor
});
