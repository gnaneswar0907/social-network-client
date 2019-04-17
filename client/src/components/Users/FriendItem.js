import React, { Component } from "react";

import faker from "faker";

export default class FriendItem extends Component {
  render() {
    return (
      <div className="ui link items">
        <div className="item">
          <div className="ui tiny image">
            <img src={faker.image.avatar()} />
          </div>
          <div className="content">
            <div className="header">Stevie Feliciano</div>
            <div className="description">
              <p />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ui tiny image">
            <img src={faker.image.avatar()} />
          </div>
          <div className="content">
            <div className="header">Veronika Ossi</div>
            <div className="description">
              <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
