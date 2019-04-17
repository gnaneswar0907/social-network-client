import React, { Component } from "react";

export default class Overview extends Component {
  render() {
    return (
      <div className="ui selection very relaxed divided list">
        <div className="item">
          <div className="middle aligned content">
            <p>
              <i className="birthday cake icon" /> Birthday
            </p>
            <p>
              <i className="envelope icon" /> Email
            </p>
          </div>
        </div>
        <div className="item">
          <div className="middle aligned content">
            <i className="edge icon" /> Public Website
          </div>
        </div>
        <div className="item">
          <div className="middle aligned content">
            <i className="mobile icon" /> Mobile Number
          </div>
        </div>
        <div className="item">
          <div className="middle aligned content">
            {/* Mars icon for male and Venus icon for female */}
            <i className="mars icon" /> Gender
          </div>
        </div>
      </div>
    );
  }
}
