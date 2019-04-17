import React, { Component } from "react";

import faker from "faker";

export default class UserPhotosItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <div className="ui inverted button">Delete</div>
              </div>
            </div>
          </div>
          <img src={faker.image.fashion()} />
        </div>
      </div>
    );
  }
}
