export default (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENTUSER":
      return { ...state, current: action.payload };
    case "GET_USER":
      return { ...state, userDetail: action.payload };
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};
