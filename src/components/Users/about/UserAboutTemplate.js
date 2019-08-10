import React, { Component } from "react";
import { connect } from "react-redux";

import Overview from "./Overview";
import WorkEducation from "./WorkEducation";
import HobbiesInterests from "./HobbiesInterests";

import { userDetail } from "../../../actions/UserActions";

class UserAboutTemplate extends Component {
  // componentDidMount() {
  //   this.props.userDetail();
  // }

  render() {
    console.log(this.props.userdetail);
    if (this.props.userdetail) {
      return (
        <div className="ui  segments">
          <div className="ui top attached secondary segment">
            <div className="ui header">
              <i className="user icon" /> About
            </div>
          </div>
          <div className="ui segment">
            <div className="ui two column grid">
              <div className="four wide column">
                <div
                  style={{ marginTop: "90px", marginLeft: "70px" }}
                  className="item"
                >
                  Overview
                </div>
              </div>
              <div className="eight wide column">
                <Overview details={this.props.userdetail} />
              </div>
            </div>
          </div>
          <div className="ui segment">
            <div className="ui two column grid">
              <div className="four wide column">
                <div
                  style={{ marginTop: "50px", marginLeft: "50px" }}
                  className="item"
                >
                  Work and Education
                </div>
              </div>
              <div className="eight wide column">
                <WorkEducation />
              </div>
            </div>
          </div>
          <div className="ui segment">
            <div className="ui two column grid">
              <div className="four wide column">
                <div
                  style={{ marginTop: "50px", marginLeft: "50px" }}
                  className="item"
                >
                  Hobbies and Interests
                </div>
              </div>
              <div className="eight wide column">
                <HobbiesInterests details={this.props.userdetail.profiledata} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui  segments">
          <div className="ui top attached secondary segment">
            <div className="ui header">
              <i className="user icon" /> About
            </div>
          </div>
          <div className="ui segment">
            <div className="ui two column grid">
              <div className="four wide column">
                <div
                  style={{ marginTop: "90px", marginLeft: "70px" }}
                  className="item"
                >
                  Overview
                </div>
              </div>
              <div className="eight wide column">
                <Overview details={this.props.details} />
              </div>
            </div>
          </div>
          <div className="ui segment">
            <div className="ui two column grid">
              <div className="four wide column">
                <div
                  style={{ marginTop: "50px", marginLeft: "50px" }}
                  className="item"
                >
                  Work and Education
                </div>
              </div>
              <div className="eight wide column">
                <WorkEducation />
              </div>
            </div>
          </div>
          <div className="ui segment">
            <div className="ui two column grid">
              <div className="four wide column">
                <div
                  style={{ marginTop: "50px", marginLeft: "50px" }}
                  className="item"
                >
                  Hobbies and Interests
                </div>
              </div>
              <div className="eight wide column">
                <HobbiesInterests />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

// const mapStateToPros = state => {
//   return {
//     details: state.users
//   };
// };

// export default connect(
//   mapStateToPros,
//   {
//     userDetail
//   }
// )(UserAboutTemplate);

export default UserAboutTemplate;
