import React, { Component } from "react";
import Overview from "./Overview";
import WorkEducation from "./WorkEducation";
import HobbiesInterests from "./HobbiesInterests";

export default class UserAboutTemplate extends Component {
  render() {
    return (
      <div className="ui  segments">
        <div className="ui top attached secondary segment">
          <div className="ui header">
            <i className="user icon" /> About
          </div>
        </div>
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="four wide column">
              <div
                style={{ marginTop: "90px", marginLeft: "70px" }}
                className="item"
              >
                Overview
              </div>
            </div>
            <div className="eight wide column">
              <Overview />
            </div>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="four wide column">
              <div
                style={{ marginTop: "50px", marginLeft: "50px" }}
                className="item"
              >
                Work and Education
              </div>
            </div>
            <div className="eight wide column">
              <WorkEducation />
            </div>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="four wide column">
              <div
                style={{ marginTop: "50px", marginLeft: "50px" }}
                className="item"
              >
                Hobbies and Interests
              </div>
            </div>
            <div className="eight wide column">
              <HobbiesInterests />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
