import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

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
import Friends from "./Users/Friends";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router history={history}>
          <Switch>
            <Route path={signup} exact component={EntryPage} />
            <Route path={home} exact component={HomeFeed} />
            <Route path={messages} exact component={Messages} />
            <Route path={userFriends} exact component={Friends} />
            <Route path={findfriends} exact component={FindFriends} />
            <Route path={requests} exact component={FriendRequests} />
            <Route path={error} exact component={ErrorModal} />
            <Route path={`${posts}/:id`} exact component={SinglePost} />
            <Route path={userpage} exact component={Userpage} />
            <Route path={userUpdate} exact component={UserUpdate} />
            <Route path={profilephoto} exact component={UserDpModal} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
