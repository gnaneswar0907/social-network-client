import React, { Component } from "react";
import UserPhotosItem from "./UserPhotosItem";

export default class UserPhotosTemplate extends Component {
  render() {
    return (
      <div className="ui  segments">
        <div className="ui top attached secondary segment">
          <div className="ui header">
            <i className="images icon" /> Photos
          </div>
        </div>
        <div className="ui segment">
          <div className="ui four stackable small cards">
            <UserPhotosItem />
            <UserPhotosItem />
            <UserPhotosItem />
            <UserPhotosItem />
            <UserPhotosItem />
            <UserPhotosItem />
            <UserPhotosItem />
            <UserPhotosItem />
          </div>
        </div>
      </div>
    );
  }
}
