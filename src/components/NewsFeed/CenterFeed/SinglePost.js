import React, { Component } from "react";

import FeedNavbar from "../FeedNavbar";
import FeedItem from "./FeedItem";
import "./SinglePost.css";

export default class SinglePost extends Component {
  render() {
    return (
      <div>
        <FeedNavbar />
        <div className="ui container">
          <div className="ui item" style={{ marginTop: "40px" }}>
            <FeedItem />
          </div>
        </div>
      </div>
    );
  }
}
