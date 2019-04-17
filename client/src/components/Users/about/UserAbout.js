import React, { Component } from "react";
import Overview from "./Overview";
import WorkEducation from "./WorkEducation";
import HobbiesInterests from "./HobbiesInterests";

export default class UserAbout extends Component {
  state = { selected: "" };

  renderContent = () => {
    if (this.state.selected === "overview") {
      return <Overview />;
    } else if (this.state.selected === "work") {
      return <WorkEducation />;
    } else if (this.state.selected === "hobbies") {
      return <HobbiesInterests />;
    } else {
      return <div />;
    }
  };

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
              <div className="ui selection link very relaxed divided list">
                <div
                  onClick={() => this.setState({ selected: "overview" })}
                  className="item "
                >
                  Overview
                </div>
                <div
                  onClick={() => this.setState({ selected: "work" })}
                  className="item"
                >
                  Work and Education
                </div>
                <div
                  onClick={() => this.setState({ selected: "hobbies" })}
                  className="item"
                >
                  Hobbies and Interests
                </div>
              </div>
            </div>
            <div className="eight wide column">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}
