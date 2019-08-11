import React, { Component } from "react";
import { Link } from "react-router-dom";

import faker from "faker";
import feedImage from "../../../images/feed.png";
import friendsImage from "../../../images/friends.jpg";
import messagesImage from "../../../images/messages.svg";
import requestImage from "../../../images/request.png";

export default class SingleItem extends Component {
  render() {
    if (this.props.user) {
      const { firstName, lastName, avatar } = this.props.user;
      return (
        <Link to={this.props.link} className="item">
          <img
            className="ui avatar image"
            src={`data:image/png;base64,${avatar}`}
          />
          <div className="content">
            <div className="header">
              {firstName} {lastName}
            </div>
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
