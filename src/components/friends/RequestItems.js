import React, { Component } from "react";

import SingleRequest from "./SingleRequest";

export default class RequestItems extends Component {
  render() {
    return (
      <div className="ui very relaxed divided items">
        <SingleRequest />
        <SingleRequest />
        <SingleRequest />
      </div>
    );
  }
}
