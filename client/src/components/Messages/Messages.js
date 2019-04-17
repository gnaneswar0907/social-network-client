import React from "react";

import LeftTab from "./Left/LeftTab";
import FeedNavbar from "../NewsFeed/FeedNavbar";
import MiddleTab from "./Middle/MiddleTab";
import RightTab from "./Right/RightTab";

class Messages extends React.Component {
  state = { messages: "" };

  renderMessages = () => {
    if (this.state.messages) {
      return (
        <React.Fragment>
          <div className="seven wide column">
            <MiddleTab />
          </div>
          <div className="five wide center aligned column">
            <div style={{ position: "fixed", width: "25%" }}>
              <RightTab />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="seven wide column" />
          <div className="five wide column" />
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div>
        <FeedNavbar />
        <div className="ui grid">
          <div className="four wide center aligned column">
            <div style={{ position: "fixed", width: "25%" }}>
              <LeftTab
                onUserClick={() => this.setState({ messages: "show" })}
              />
            </div>
          </div>
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

export default Messages;
