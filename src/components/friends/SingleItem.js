import React, { Component } from "react";
import { Link } from "react-router-dom";

import { userpage } from "../../urls";
import faker from "faker";

export default class SingleItem extends Component {
  renderActions = () => {
    if (this.props.item === "requests") {
      return (
        <div className="ui right floated buttons">
          <div className="ui labeled icon positive button">
            Accept
            <i className="check  icon" />
          </div>
          <div className="or" />
          <div className="ui right labeled icon negative button">
            Cancel
            <i className="close  icon" />
          </div>
        </div>
      );
    } else if (this.props.item === "findfriends") {
      return (
        <div className="ui right floated labeled icon positive button">
          Add Friend
          <i className="add  icon" />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="item">
        <div className=" blurring dimmable  image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <Link to={`${userpage}/id`} className="ui inverted button">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <img src={faker.image.avatar()} />
        </div>
        <div className="middle aligned content">
          <a className="header">Giri</a>
          <div className="meta">
            <span>Studies at University of Texas at Dallas</span>
          </div>
          <div className="description">
            <p />
          </div>
          <div className="extra">
            {this.renderActions()}
            Joined Coolgram on 2014
          </div>
        </div>
      </div>
    );
  }
}
