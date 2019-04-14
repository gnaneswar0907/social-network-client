import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return { ...state, [action.payload.id]: action.payload };

    case "GET_POSTS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "LIKE_POST":
      return { ...state, [action.payload.id]: action.payload };
    case "ADD_COMMENT":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
