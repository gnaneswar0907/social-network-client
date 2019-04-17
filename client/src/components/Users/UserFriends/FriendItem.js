import React, { Component } from "react";

import faker from "faker";

export default class FriendItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="ui items">
          <div className="item">
            <div className="ui tiny image">
              <img src={faker.image.avatar()} />
            </div>
            <div className="middle aligned content">
              <div
                style={{ marginRight: "10px" }}
                className="ui right floated grey button"
              >
                Friends
                <i style={{ paddingLeft: "15px" }} className="check icon" />
              </div>
              <div className="header">{faker.name.firstName()}</div>
              <div className="meta">{faker.name.jobDescriptor()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
