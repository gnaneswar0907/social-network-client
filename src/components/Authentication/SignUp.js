import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="center aligned column">
        <h2 style={{ marginTop: "20px" }} className="ui large header">
          Connect with your friends and the world around you on Coolgram
        </h2>
        <div className="ui header" style={{ marginLeft: "180px" }}>
          <i className="icon images outline" />
          <div className="content">See Photos and Updates of your friends</div>
        </div>
        <div className="ui header" style={{ marginLeft: "180px" }}>
          <i className="icon share square outline" />
          <div className="content">
            Share what's new in your life on timeline
          </div>
        </div>
        <div className="ui header" style={{ marginLeft: "180px" }}>
          <i className="icon search" />
          <div className="content">Find more</div>
        </div>
      </div>
    );
  }
}

export default SignUp;
