import React from "react";
import { connect } from "react-redux";

import faker from "faker";

import { createPost } from "../../../actions/PostActions";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", posttext: "" };
    this.fileRef = React.createRef();
  }
  onFileUplaod = () => {
    if (this.fileRef.current.files && this.fileRef.current.files[0]) {
      const file = this.fileRef.current.files[0];
      const src = URL.createObjectURL(file);
      this.setState({ file: src });
    }
  };

  clearUploadedImage = () => {
    this.setState({ file: "", posttext: "" });
  };

  onUploadComplete = () => {
    if (this.state.file === "") {
      return;
    } else {
      return (
        <div className="left floated content">
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

  creatingPost = () => {
    //const data = new FormData();
    let data = {};
    if (this.state.posttext === "") {
      return;
    } else {
      if (this.state.file === "") {
        data = { content: this.state.posttext };
      } else {
        data = {
          content: this.state.posttext,
          file: this.fileRef.current.files[0]
        };
      }

      this.props.createPost(data);
      this.setState({ posttext: "", file: "" });
    }
  };

  render() {
    const user = this.props.userdetails;
    if (user) {
      return (
        <div className="ui fluid card">
          <div className="content">
            <p>
              <b>Create Post</b>
            </p>
          </div>

          <div className="content">
            <div className="left floated ui  image avatar">
              <img src={user.avatar} />
            </div>
            <div className="ui fluid transparent input">
              <input
                type="text"
                value={this.state.posttext}
                onChange={e => this.setState({ posttext: e.target.value })}
                placeholder="What's on your mind Today?"
                required
              />
            </div>
          </div>
          {this.onUploadComplete()}
          <div className=" content">
            <button
              onClick={this.creatingPost}
              className="ui right floated button positive"
            >
              Post
            </button>
            <input
              ref={this.fileRef}
              type="file"
              id="upload"
              multiple
              accept="image/gif, image/jpeg, image/png"
              style={{
                zIndex: "-1",
                width: "0.1px",
                height: "0.1px",
                opacity: "0"
              }}
              onChange={this.onFileUplaod}
            />
            <label
              htmlFor="upload"
              className="ui blue left floated circular animated button"
            >
              <div className="hidden content">
                <i className="ui upload icon" />
              </div>
              <div className="visible content">Photo Upload</div>
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui fluid card">
          <div className="content">
            <p>
              <b>Create Post</b>
            </p>
          </div>

          <div className="content">
            <div className="left floated ui avatar image ">
              <div className="ui placeholder">
                <div className="ui avatar image" />
              </div>
              {/* <img src="" alt="userdp" /> */}
            </div>
            <div className="ui fluid transparent input">
              <input
                type="text"
                value={this.state.posttext}
                onChange={e => this.setState({ posttext: e.target.value })}
                placeholder="What's on your mind Today?"
                required
              />
            </div>
          </div>
          {this.onUploadComplete()}
          <div className=" content">
            <button
              onClick={this.creatingPost}
              className="ui right floated button positive"
            >
              Post
            </button>
            <input
              ref={this.fileRef}
              type="file"
              id="upload"
              multiple
              accept="image/gif, image/jpeg, image/png"
              style={{
                zIndex: "-1",
                width: "0.1px",
                height: "0.1px",
                opacity: "0"
              }}
              onChange={this.onFileUplaod}
            />
            <label
              htmlFor="upload"
              className="ui blue left floated circular animated button"
            >
              <div className="hidden content">
                <i className="ui upload icon" />
              </div>
              <div className="visible content">Photo Upload</div>
            </label>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  null,
  {
    createPost
  }
)(CreatePost);
