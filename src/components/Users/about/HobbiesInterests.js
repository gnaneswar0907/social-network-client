import React, { Component } from "react";

export default class HobbiesInterests extends Component {
  // renderHobbies = ({hobbies}) => {
  //   return hobbies.map(hobby => {
  //     return <div className="item">{hobby}</div>;
  //   });
  // };

  renderInterests = ({ interests }) => {
    return interests.map(interest => {
      return <div className="item">{interest}</div>;
    });
  };

  render() {
    console.log(this.props.details);
    if (this.props.details) {
      return (
        <div className="ui very relaxed divided list">
          <div className="item">
            <div className="header">Hobbies</div>
            <div className="ui selection very relaxed horizontal list">
              <div className="item">Hobby 1</div>
              <div className="item">Hobby 2</div>
            </div>
          </div>
          <div className="item">
            <div className="header">Interests</div>
            <div className="ui selection very relaxed horizontal list">
              {this.renderInterests(this.props.details)}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="ui very relaxed divided list">
          <div class="item">
            <div className="header">Hobbies</div>
            <div class="ui selection very relaxed horizontal list">
              <div class="item" />
            </div>
          </div>
          <div class="item">
            <div className="header">Interests</div>
            <div class="ui selection very relaxed horizontal list">
              <div class="item" />
            </div>
          </div>
        </div>
      );
    }
  }
}
