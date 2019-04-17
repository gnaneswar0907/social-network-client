import website from "../api";
import history from "../history";

//--------Getting Message Friends List------------

export const fetchMessageFriends = userid => {
  return async dispatch => {
    const response = await website.get(`/users/${userid}/messagefriends`);
    dispatch({ type: "GET_MESSAGE_FRIENDS", payload: response.data });
  };
};

//--------Getting Messages List------------

export const fetchMessages = (userid, friendId) => {
  return async dispatch => {
    const response = await website.get(`/users/${userid}/messages/${friendId}`);
    dispatch({ type: "GET_MESSAGES", payload: response.data });
  };
};

//---------Changing Color of CHat------------

export const changeColor = color => {
  var newColor = "";
  switch (color) {
    case "#ff0000":
      newColor = "red";
      break;
    case "#ffa500":
      newColor = "orange";
      break;
    case "#ffff00":
      newColor = "yellow";
      break;
    case "#808000":
      newColor = "olive";
      break;
    case "#008000":
      newColor = "green";
      break;
    case "#008080":
      newColor = "teal";
      break;
    case "#000000":
      newColor = "black";
      break;
    case "#ee82ee":
      newColor = "violet";
      break;
    case "#800080":
      newColor = "purple";
      break;
    case "#ffc0cb":
      newColor = "pink";
      break;
    case "#a52a2a":
      newColor = "brown";
      break;
    case "#808080":
      newColor = "grey";
      break;
    default:
      newColor = "blue";
      break;
  }

  return { type: "CHANGE_COLOR", payload: newColor };
};

//------Creating a Message--------------

export const addMessage = (userid, friendId, message) => {
  return async dispatch => {
    const response = await website.post(
      `/user/${userid}/messages/${friendId}`,
      message
    );
    dispatch({ type: "ADD_MESSAGE", payload: response.data });
  };
};
