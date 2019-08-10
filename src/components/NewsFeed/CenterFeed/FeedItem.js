import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { likePost } from "../../../actions/PostActions";
import { posts, userpage } from "../../../urls";
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

  calculateTime = () => {
    const date1 = new Date();
    const date2 = new Date(this.props.post.date);
    var difference = date1.getTime() - date2.getTime();
    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    var minutesDifference = Math.floor(difference / 1000 / 60);
    var secondsDifference = Math.floor(difference / 1000);
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    if (secondsDifference > 59) {
      if (minutesDifference > 59) {
        if (hoursDifference > 23) {
          return daysDifference + " days ago";
        } else {
          return hoursDifference + " hours ago";
        }
      } else {
        return minutesDifference + " mins ago";
      }
    } else {
      return secondsDifference + " secs ago";
    }
  };

  render() {
    return (
      <div className="ui raised fluid card">
        <div className="content">
          <div className="right floated meta date">
            <i class="clock icon" /> {this.calculateTime()}
            {/* {this.props.post.time} */}
          </div>
          <div className="author">
            <img
              className="left floated avatar"
              src={this.props.userdata.avatar}
            />
            <Link
              to={`${userpage}/:id`}
              className="user"
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
              {this.props.userdata.name}
              {/* {this.props.post.username} */}
            </Link>
            {"    "}
            added a new post
            {/* {this.props.post.heading} */}
          </div>
          <div className="meta">
            <i className="icon users" style={{ paddingLeft: "5px" }} />
          </div>
        </div>
        <div className="content">{this.props.post.text}</div>
        <div className="content">
          <span className="right floated">
            <i
              onClick={this.onLiked}
              className={`${this.state.color} heart like icon`}
            />
            17 likes
            {/* {this.props.post.likes} */}
          </span>
          <span
            onClick={() => {
              this.state.commentVisibility
                ? this.setState({ commentVisibility: false })
                : this.setState({ commentVisibility: true });
            }}
          >
            <i className="comment icon" />3 comments
            {/* {this.props.post.comments} */}
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
