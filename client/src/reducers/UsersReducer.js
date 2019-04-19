export default (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, [action.payload.id]: action.payload };
    case "UPDATE_USER":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
