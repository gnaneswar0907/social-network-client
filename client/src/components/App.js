import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {
  home,
  signup,
  userpage,
  messages,
  findfriends,
  requests,
  profilephoto,
  error,
  posts,
  about,
  userPhotos,
  userFriends,
  userUpdate
} from "../urls";
import setAuthToken from "./Authentication/setAuthToken";
import store from "../store";
import PrivateRoute from "../PrivateRoute";
import EntryPage from "./EntryPage";
import HomeFeed from "./NewsFeed/HomeFeed";
import history from "../history";
import SinglePost from "./NewsFeed/CenterFeed/SinglePost";
import Userpage from "./Users/Userpage";
import UserUpdate from "./Users/UserUpdate";
import UserDpModal from "./Users/UserDpModal";
import Messages from "./Messages/Messages";
import FindFriends from "./friends/FindFriends";
import FriendRequests from "./friends/FriendRequests";
import ErrorModal from "./ErrorModal";
import UserFriends from "./Users/UserFriends/UserFriends";
import UserAbout from "./Users/about/UserAbout";
import UserPhotos from "./Users/UserPhotos/UserPhotos";
import { logoutUser } from "../actions/UserActions";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch({ type: "SET_CURRENT_USER", payload: decoded });

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    history.push("/signup");
  }
}

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router history={history}>
          <Switch>
            <Route path={signup} exact component={EntryPage} />
            <Route path={error} exact component={ErrorModal} />
            <PrivateRoute path={home} exact component={HomeFeed} />
            <PrivateRoute path={messages} exact component={Messages} />
            <PrivateRoute path={about} exact component={UserAbout} />
            <PrivateRoute path={userFriends} exact component={UserFriends} />
            <PrivateRoute path={userPhotos} exact component={UserPhotos} />
            <PrivateRoute path={userUpdate} exact component={UserUpdate} />
            <PrivateRoute path={findfriends} exact component={FindFriends} />
            <PrivateRoute path={requests} exact component={FriendRequests} />
            <PrivateRoute path={`${posts}/:id`} exact component={SinglePost} />
            <PrivateRoute path={`${userpage}/:id`} exact component={Userpage} />
            <PrivateRoute path={profilephoto} exact component={UserDpModal} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
