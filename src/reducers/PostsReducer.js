import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return action.payload;
    case "GET_USER_POSTS":
      return action.payload;
    case "GET_POSTS":
      return action.payload;
    case "LIKE_POST":
      return { ...state, [action.payload.id]: action.payload };
    case "ADD_COMMENT":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
