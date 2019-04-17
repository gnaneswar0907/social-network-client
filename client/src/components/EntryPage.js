import React from "react";

import Navbar from "./Authentication/Navbar";
import Signup from "./Authentication/SignUp";
import SignUpForm from "./Authentication/SignUpForm";

const Entrypage = props => {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="sixteen wide column">
          <Navbar />
        </div>
      </div>
      <div className="two column row">
        <Signup />
        <div>
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
};

export default Entrypage;
