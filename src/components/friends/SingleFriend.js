import React, { Component } from "react";
import { connect } from "react-redux";

import SingleItem from "./SingleItem";

class SingleFriend extends Component {
  render() {
    return <SingleItem item="findfriends" />;
  }
}

export default connect()(SingleFriend);
