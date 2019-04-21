import website from "../api";
import history from "../history";

//-------- Create Post ------------

export const createPost = formValues => {
  return async dispatch => {
    const response = await website.post("/posts", { ...formValues });
    dispatch({ type: "CREATE_POST", payload: response.data });
    history.push("/home");
  };
};

//-------- Get Posts ------------

export const getPosts = userid => {
  return async dispatch => {
    const response = await website.get(`/posts/${userid}`);
    dispatch({ type: "GET_POSTS", payload: response.data });
  };
};

//--------Like Post------------

export const likePost = (userid, postid) => {
  return async dispatch => {
    const response = await website.post(`/posts/${postid}/like`, userid);
    dispatch({ type: "LIKE_POST", payload: response.data });
  };
};

//------Add Comment -------

export const addComment = (comment, postid) => {
  return async dispatch => {
    const response = await website.post(`/posts/${postid}`, comment);
    dispatch({ type: "ADD_COMMENT", payload: response.data });
  };
};
