import React, { Component } from "react";

export default class Overview extends Component {
  render() {
    if (this.props.details.profiledata && this.props.details.userdata) {
      const { date, gender } = this.props.details.profiledata;
      const { email, mobile } = this.props.details.userdata;
      let dob = new Date(date);
      const genderCLass = gender == "male" ? "mars" : "venus";
      return (
        <div className="ui selection very relaxed divided list">
          <div className="item">
            <div className="middle aligned content">
              <p>
                <i className="birthday cake icon" /> {dob.toLocaleDateString()}
              </p>
              <p>
                <i className="envelope icon" /> {email}
              </p>
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              <i className="edge icon" />
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              <i className="mobile icon" /> {mobile}
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              {/* Mars icon for male and Venus icon for female */}
              <i className={`${genderCLass} icon`} /> {gender}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui selection very relaxed divided list">
          <div className="item">
            <div className="middle aligned content">
              <p>
                <i className="birthday cake icon" />
              </p>
              <p>
                <i className="envelope icon" />
              </p>
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              <i className="edge icon" />
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              <i className="mobile icon" />
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              {/* Mars icon for male and Venus icon for female */}
            </div>
          </div>
        </div>
      );
    }
  }
}
