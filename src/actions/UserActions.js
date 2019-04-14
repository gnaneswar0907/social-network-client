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
    const response = await website.post("/users", { ...formValues });
    dispatch({ type: "CREATE_USER", payload: response.data });
    history.push("/");
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
