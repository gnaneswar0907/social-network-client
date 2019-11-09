import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_MESSAGE_FRIENDS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "GET_MESSAGES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ADD_MESSAGE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
