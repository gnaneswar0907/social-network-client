import website from "../api";
import history from "../history";

export const userLogin = formValues => {
  return async (dispatch, getState) => {
    history.push("/home");
  };
};

//----------CREATING USER--------------------

export const userCreate = formValues => {
  return async (dispatch, getState) => {
    const response = await website
      .post("/api/users/signup", formValues)
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          history.push({
            pathname: "/error",
            state: {
              msg: error.response.data.error,
              title: "Signup Error"
            }
          });
        } else if (error.request) {
          console.log(error.request);
          history.push({
            pathname: "/error",
            state: {
              msg: "Server Error. Please try after some time!!!",
              title: "Signup Error"
            }
          });
        } else {
          console.log("Error", error.message);
          history.push({
            pathname: "/error",
            state: {
              msg: error.message,
              title: "Signup Error"
            }
          });
        }
        //console.log(error.config);
      });
  };
};

//----------GETTING USER DETAIL--------------------

export const userDetail = userid => {
  return async dispatch => {
    const response = await website.get(`/users/${userid}`);
    dispatch({ type: "GET_USER", payload: response.data });
  };
};

//----------UPDATING A USER--------------------

export const userUpdate = (userid, formValues) => {
  return async dispatch => {
    const response = await website.patch(`/users/${userid}`, formValues);
    dispatch({ type: "UPDATE_USER", payload: response.data });
  };
};

//----------USER DP UPDATE--------------------

export const userDPUpdate = (userid, file) => {
  return async dispatch => {
    const response = await website.patch(`/users/${userid}`, file);
    dispatch({ type: "UPDATE_USER", payload: response.data });
    history.push(`/user/${userid}`);
  };
};

//--------Getting Find Friends List------------

export const findFriends = userid => {
  return async dispatch => {
    const response = await website.get(`/users/findfriends/${userid}`);
    dispatch({ type: "GET_FIND_FRIENDS", payload: response.data });
  };
};

//--------Add New Friend------------

export const addFiend = (userid, friendId) => {
  return async dispatch => {
    const response = await website.post(
      `/users/${friendId}/requests/${userid}`
    );
    dispatch({ type: "SEND_REQUEST", payload: response.data });
    history.push("/home/findfriends");
  };
};
