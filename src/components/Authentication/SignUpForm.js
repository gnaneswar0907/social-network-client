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
    this.props.userCreate(formValues);
    this.props.reset();
    this.genderRef1.current.checked = false;
    this.genderRef2.current.checked = false;
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui equal width form error"
      >
        <div className="fields">
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
        <div className="fields">
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
            type="email"
            component={this.renderInput}
          />
        </div>
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
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = ["firstName", "lastName", "email", "gender"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "must enter a value";
    }
  });
  if (!values.mobile) {
    errors.mobile = "Must enter a value";
  } else if (values.mobile && !/^(\+98|0)?9\d{9}$/.test(values.mobile)) {
    errors.mobile = "Invalid phone number entered";
  }

  if (!values.password) {
    errors.password = "Must enter a value";
  } else if (values.password.length < 7) {
    errors.password = "Length must be greater than 7";
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
