import _ from "lodash";

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATION":
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload)
      };
    default:
      return state;
  }
};
