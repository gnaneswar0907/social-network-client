import React from "react";
import { connect } from "react-redux";

import faker from "faker";
import { fetchMessageFriends } from "../../../actions/MessagesActions";

class LeftTab extends React.Component {
  componentDidMount() {
    //this.props.fetchMessageFriends();
  }

  renderMessageFriendList = () => {
    if (this.props.messages == null) {
      return;
    } else {
    }
  };

  onUserClick = () => {
    const clicked = "true";
    this.props.onUserClick(clicked);
  };

  render() {
    return (
      <div
        style={{ marginTop: "59px" }}
        className="ui big middle aligned very relaxed divided selection animated list"
      >
        <div className="ui huge grey label" style={{ width: "100%" }}>
          <i className="inbox icon"> </i>Messages
        </div>
        <div onClick={this.onUserClick} className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="content">
            <div className="header">Helen</div>
          </div>
        </div>
        <div onClick={this.onUserClick} className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="content">
            <div className="header">Christin</div>
          </div>
        </div>
        <div onClick={this.onUserClick} className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="content">
            <div className="header">Daniel</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageFriends: Object.values(state.messages)
  };
};

export default connect(
  null,
  {
    fetchMessageFriends
  }
)(LeftTab);
