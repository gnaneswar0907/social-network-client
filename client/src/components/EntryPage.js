import React from "react";
import { connect } from "react-redux";

import history from "../history";
import Navbar from "./Authentication/Navbar";
import Signup from "./Authentication/SignUp";
import SignUpForm from "./Authentication/SignUpForm";

class Entrypage extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      history.push("/home");
    }
  }

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="sixteen wide column">
            <Navbar />
          </div>
        </div>
        <div className="two column row">
          <Signup />
          <div className="six wide column">
            <h1 className="large header">Sign Up !!</h1>
            <p className="sub header" style={{ marginBottom: "40px" }}>
              It is free and always will be.
            </p>
            <SignUpForm />
          </div>
        </div>
        <div
          style={{ position: "fixed", bottom: "0", width: "100%" }}
          className="ui inverted footer segment "
        >
          <div className="ui container">
            Copyright &copy; {new Date().getFullYear()} Coolgram
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Entrypage);
