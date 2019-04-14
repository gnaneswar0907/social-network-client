import React, { Component } from "react";
import { connect } from "react-redux";

import { likePost } from "../../../actions/PostActions";
import Comments from "./Comments";
import faker from "faker";

class FeedItem extends Component {
  state = { commentVisibility: false, likecolor: "" };

  onLiked = (userid, postid) => {
    //this.props.likePost(userid, postid);
    this.setState({ likecolor: "red" });
  };

  renderComments = (comments, postid) => {
    if (this.state.commentVisibility) {
      return (
        <div className="content">
          <Comments comments={comments} postid={postid} />
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
      <div className="ui raised link fluid card">
        <div className="content">
          <div className="right floated meta date">
            <i class="clock icon" /> 4 days ago
          </div>
          <div className="author">
            <img className="left floated avatar" src={faker.image.avatar()} />
            <a className="user" style={{ paddingLeft: "5px" }}>
              Helen Troy
            </a>{" "}
            added 3 new illustrations
          </div>
          <div className="meta">
            <i className="icon users" style={{ paddingLeft: "5px" }} />
          </div>
        </div>
        <div className="content">
          <div className="medium images" style={{ padding: "10px" }}>
            <a>
              <img
                style={{ padding: "5px" }}
                src={faker.image.people(200, 200)}
              />
            </a>
            <a>
              <img
                style={{ padding: "5px" }}
                src={faker.image.image(200, 200)}
              />
            </a>
            <a>
              <img
                style={{ padding: "5px" }}
                src={faker.image.image(200, 200)}
              />
            </a>
          </div>
        </div>
        <div className="content">
          <span className="right floated">
            <i
              onClick={this.onLiked}
              className={`${this.state.color} heart like icon`}
            />
            17 likes
          </span>
          <span
            onClick={() => {
              this.state.commentVisibility
                ? this.setState({ commentVisibility: false })
                : this.setState({ commentVisibility: true });
            }}
          >
            <i className="comment icon" />3 comments
          </span>
        </div>
        {this.renderComments(this.props.post.comments, this.props.post.id)}
      </div>
    );
  }
}

export default connect(
  null,
  {
    likePost
  }
)(FeedItem);
