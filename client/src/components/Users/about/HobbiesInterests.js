import React, { Component } from "react";

export default class HobbiesInterests extends Component {
  renderHobbies = () => {
    return;
  };

  renderInterests = () => {
    return;
  };

  render() {
    return (
      <div class="ui very relaxed divided list">
        <div class="item">
          <div className="header">Hobbies</div>
          <div class="ui selection very relaxed horizontal list">
            <div class="item">Hobby 1</div>
            <div class="item">Hobby 2</div>
            <div class="item">Hobby 1</div>
            <div class="item">Hobby 2</div>
          </div>
        </div>
        <div class="item">
          <div className="header">Interests</div>
          <div class="ui selection very relaxed horizontal list">
            <div class="item">Interest 1</div>
            <div class="item">Interest 2</div>
            <div class="item">Interest 1</div>
            <div class="item">Interest 2</div>
          </div>
        </div>
      </div>
    );
  }
}
