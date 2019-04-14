import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

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

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={EntryPage} />
            <Route path="/home" exact component={HomeFeed} />
            <Route path="/user/messages" exact component={Messages} />
            <Route path="/home/findfriends" exact component={FindFriends} />
            <Route
              path="/home/friendRequests"
              exact
              component={FriendRequests}
            />
            <Route path="/home/posts/:id" exact component={SinglePost} />
            <Route path="/user/:id" exact component={Userpage} />
            <Route path="/user/edit/:id" exact component={UserUpdate} />
            <Route path="/user/id/dp" exact component={UserDpModal} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
