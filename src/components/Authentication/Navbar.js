import React, { Component } from "react";
import Login from "./Login";

class Navbar extends Component {
  render() {
    return (
      <div
        className="ui blue inverted clearing segment"
        style={{ height: "80px" }}
      >
        <div className="ui right floated header" style={{ marginTop: "10px" }}>
          <Login />
        </div>
        <div className="ui header left floated" style={{ marginTop: "10px" }}>
          <i className="plug icon" />
          <div className="content">Coolgram</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
