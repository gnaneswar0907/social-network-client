import React, { Component } from "react";

import MiddleHeader from "./MiddleHeader";
import MiddleContent from "./MiddleContent";
import CreateMessage from "./CreateMessage";

class MiddleTab extends Component {
  render() {
    return (
      <div className="ui segments">
        <div className="ui top attached segment">
          <MiddleHeader />
        </div>
        <div className="ui  attached segment">
          <MiddleContent />
        </div>
        <div className="ui bottom attached segment">
          <CreateMessage />
        </div>
      </div>
    );
  }
}

export default MiddleTab;
