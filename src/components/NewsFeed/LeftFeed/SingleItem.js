import React, { Component } from "react";
import { Link } from "react-router-dom";

import faker from "faker";
import feedImage from "../../../images/feed.png";
import friendsImage from "../../../images/friends.jpg";
import messagesImage from "../../../images/messages.svg";
import requestImage from "../../../images/request.png";

export default class SingleItem extends Component {
  render() {
    if (this.props.userdata) {
      return (
        <Link to={this.props.link} className="item">
          <img className="ui avatar image" src={this.props.userdata.avatar} />
          <div className="content">
            <div className="header">{this.props.userdata.name}</div>
          </div>
        </Link>
      );
    } else {
      let image = "";
      const content = this.props.content;
      if (content === "News Feed") {
        image = feedImage;
      } else if (content === "Messages") {
        image = messagesImage;
      } else if (content === "Find Friends") {
        image = friendsImage;
      } else if (content === "Requests") {
        image = requestImage;
      }
      return (
        <Link to={this.props.link} className="item">
          <img className="ui avatar image" src={image} alt="dp" />
          <div className="content">
            <div className="header">{this.props.content}</div>
          </div>
        </Link>
      );
    }
  }
}
