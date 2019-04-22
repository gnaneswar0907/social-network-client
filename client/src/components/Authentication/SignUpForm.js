import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { userCreate } from "../../actions/UserActions";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.genderRef1 = React.createRef();
    this.genderRef2 = React.createRef();
  }

  renderErrors = meta => {
    if (meta.touched && meta.error) {
      return <div className="ui pointing red inverted label">{meta.error}</div>;
    }
  };
  renderInput = ({ input, label, id, type, meta }) => {
    const classname = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={classname}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} type={type} placeholder={label} />
        {this.renderErrors(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    //this.props.userCreate(formValues);
    this.props.reset();
    this.genderRef1.current.checked = false;
    this.genderRef2.current.checked = false;
  };

  render() {
    return (
      <div className="ui container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui equal width form error"
        >
          <div className="two fields">
            <Field
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              component={this.renderInput}
            />
            <Field
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              component={this.renderInput}
            />
          </div>
          <div className="two fields">
            <Field
              id="mobile"
              name="mobile"
              label="Mobile Number"
              type="tel"
              component={this.renderInput}
            />
            <Field
              id="email"
              name="email"
              label="Email"
              type="text"
              component={this.renderInput}
            />
          </div>

          <Field
            id="username"
            name="handle"
            type="text"
            label="Username"
            component={this.renderInput}
          />

          <Field
            id="password"
            name="password"
            type="password"
            label="New Password"
            component={this.renderInput}
          />

          <Field name="gender" component="radio">
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    id="male"
                    ref={this.genderRef1}
                    name="gender"
                    type="radio"
                    value="male"
                  />
                  <label htmlFor="male">Male</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input
                    id="female"
                    ref={this.genderRef2}
                    type="radio"
                    value="female"
                    name="gender"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </Field>

          <button
            style={{ marginTop: "20px" }}
            className="big ui button positive"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const requiredFields = ["firstName", "lastName", "email", "gender"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Must enter a value";
    }
  });

  if (values.email && !emailRegex.test(values.email)) {
    errors.email = "email must be of in correct form";
  }

  if (!values.mobile) {
    errors.mobile = "Must enter a value";
  } else if (
    values.mobile &&
    !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobile)
  ) {
    errors.mobile = "Invalid phone number entered";
  }

  if (!values.password) {
    errors.password = "Must enter a value";
  } else if (values.password.length < 7 || values.password.length > 16) {
    errors.password = "Length must be between 7 and 16 characters long";
  } else {
    var hasUpperCase = /[A-Z]/.test(values.password);
    var hasLowerCase = /[a-z]/.test(values.password);
    var hasNumbers = /\d/.test(values.password);
    var hasNonalphas = /\W/.test(values.password);
    if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 4) {
      errors.password =
        "Must contain a lower case letter, upper case letter, a number and a non-alphanumberic character";
    }
  }

  if (!values.handle) {
    errors.handle = "Must enter a value";
  } else if (values.handle.length > 20) {
    errors.handle = "Length must be less than 20";
  }

  if (values.firstName && !/^[a-zA-Z0-9]*$/g.test(values.firstName)) {
    errors.firstName = "Only Charecters and Numbers";
  }
  if (values.lastName && !/^[a-zA-Z0-9]*$/g.test(values.lastName)) {
    errors.lastName = "Only Charecters and Numbers";
  }

  return errors;
};

const signUp = reduxForm({
  form: "SignUpForm",
  validate: validate
})(SignUpForm);

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    userCreate: userCreate
  }
)(signUp);
