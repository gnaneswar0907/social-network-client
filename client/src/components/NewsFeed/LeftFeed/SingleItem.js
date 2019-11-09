import React, { Component } from "react";
import { Link } from "react-router-dom";

import faker from "faker";

export default class SingleItem extends Component {
  render() {
    return (
      <Link to={this.props.link} className="item">
        <img className="ui avatar image" src={faker.image.avatar()} />
        <div className="content">
          <div className="header">{this.props.content}</div>
        </div>
      </Link>
    );
  }
}
