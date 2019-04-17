import React from "react";

import faker from "faker";

class MiddleHeader extends React.Component {
  render() {
    return (
      <div className="ui items">
        <div className="item">
          <div className="ui tiny circular image">
            <img src={faker.image.avatar()} />
          </div>
          <div className="middle aligned content">
            <a className="header">Header</a>
            <div className="meta">
              <span>You are friends on coolgram</span>
            </div>
            <div className="extra">Additional Details</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleHeader;
