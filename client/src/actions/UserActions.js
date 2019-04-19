import jwt_decode from "jwt-decode";

import server from "../api";
import history from "../history";
import setAuthToken from "../components/Authentication/setAuthToken";

//----------CREATING USER--------------------

export const userCreate = formValues => {
  return async dispatch => {
    await server.post("/users/signup", formValues).catch(error => {
      serverErrorDisplay(error, "SignUp Error");
    });
    history.push("/signup");
  };
};

//------Login  User-------------------

export const userLogin = formValues => {
  return async dispatch => {
    const response = await server
      .post("/users/login", formValues)
      .catch(error => {
        serverErrorDisplay(error, "Login Error");
      });

    if (response) {
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);

      dispatch({ type: "SET_CURRENT_USER", payload: decoded });

      history.push("/home");
    }
  };
};

//--------Log Out User-----------

export const logoutUser = () => {
  return async dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch({ type: "SET_CURRENT_USER", payload: {} });
  };
};

//----------GETTING USER DETAIL--------------------

export const userDetail = userid => {
  return async dispatch => {
    const response = await server.get(`/users/${userid}`);
    dispatch({ type: "GET_USER", payload: response.data });
  };
};

//----------UPDATING A USER--------------------

export const userUpdate = (userid, formValues) => {
  return async dispatch => {
    const response = await server.patch(`/users/${userid}`, formValues);
    dispatch({ type: "UPDATE_USER", payload: response.data });
  };
};

//----------USER DP UPDATE--------------------

export const userDPUpdate = (userid, file) => {
  return async dispatch => {
    const response = await server.patch(`/users/${userid}`, file);
    dispatch({ type: "UPDATE_USER", payload: response.data });
    history.push(`/user/${userid}`);
  };
};

//--------Getting Find Friends List------------

export const findFriends = userid => {
  return async dispatch => {
    const response = await server.get(`/users/findfriends/${userid}`);
    dispatch({ type: "GET_FIND_FRIENDS", payload: response.data });
  };
};

//--------Add New Friend------------

export const addFiend = (userid, friendId) => {
  return async dispatch => {
    const response = await server.post(`/users/${friendId}/requests/${userid}`);
    dispatch({ type: "SEND_REQUEST", payload: response.data });
    history.push("/home/findfriends");
  };
};

const serverErrorDisplay = (error, title) => {
  if (error.response) {
    history.push({
      pathname: "/error",
      state: {
        msg: error.response.data.error,
        title: title
      }
    });
  } else if (error.request) {
    history.push({
      pathname: "/error",
      state: {
        msg: "Server Error. Please try after some time!!!",
        title: title
      }
    });
  } else {
    history.push({
      pathname: "/error",
      state: {
        msg: error.message,
        title: title
      }
    });
  }
};
