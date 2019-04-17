import React, { Component } from "react";
import UserPhotosItem from "./UserPhotosItem";

export default class UserPhotos extends Component {
  render() {
    return (
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
    );
  }
}
