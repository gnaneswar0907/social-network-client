import React, { Component } from "react";
import { connect } from "react-redux";

import SingleItem from "./SingleItem";

class SingleRequest extends Component {
  render() {
    return <SingleItem item="requests" />;
  }
}

export default connect()(SingleRequest);
