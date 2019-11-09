import React, { Component } from "react";
import { connect } from "react-redux";

import { addComment } from "../../../actions/PostActions";
import Comment from "./Comment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.state = { file: "", newComment: "" };
  }

  commentFileUploaded = () => {
    if (this.fileRef.current.files && this.fileRef.current.files[0]) {
      const file = this.fileRef.current.files[0];
      const src = URL.createObjectURL(file);
      this.setState({ file: src });
    }
  };

  clearUploadedImage = () => {
    this.setState({ file: "" });
  };

  onCommentAdd = e => {
    e.preventDefault();

    const commentContent = {
      text: this.state.newComment,
      image: this.fileRef.current.files[0]
    };
    const comment = { userid: "", content: commentContent };
    //this.props.addComment(comment, this.props.postid);
    console.log(comment);
    this.setState({ newComment: "" });
    this.setState({ file: "" });
  };

  forFileComment = () => {
    if (this.state.file === "") {
      return <div />;
    } else {
      return (
        <div style={{ marginTop: "8px" }} className="extra content">
          <div className="ui small image">
            <span
              onClick={this.clearUploadedImage}
              className="ui black right corner label"
            >
              <i className="delete icon" />
            </span>
            <img src={this.state.file} />
          </div>
        </div>
      );
    }
  };

  renderComments = () => {
    return this.props.comments.map(comment => {
      return <Comment id={comment.id} comment={comment} />;
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui small comments">
          <h3 className="ui dividing header">Comments</h3>
          {/* {this.renderComments(this.props.comments)} */}
          <Comment />
        </div>
        <div className="extra content">
          <form onSubmit={this.onCommentAdd}>
            <div
              className="ui large transparent input"
              style={{ width: "100%" }}
            >
              <input
                value={this.state.newComment}
                onChange={e => this.setState({ newComment: e.target.value })}
                type="text"
                placeholder="Add Comment..."
              />
              <i
                onClick={() => {
                  this.fileRef.current.click();
                }}
                className="image icon"
              />
              <input
                onChange={this.commentFileUploaded}
                type="file"
                ref={this.fileRef}
                hidden
              />
            </div>
          </form>
        </div>
        {this.forFileComment()}
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {
    addComment
  }
)(Comments);
