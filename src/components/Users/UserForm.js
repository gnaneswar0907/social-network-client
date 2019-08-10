import React from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import _ from "lodash";

import { userDetail, userUpdate } from "../../actions/UserActions";

class UserFrom extends React.Component {
  constructor(props) {
    super(props);
    this.genderRef1 = React.createRef();
    this.genderRef2 = React.createRef();
    this.dobRef = React.createRef();
    this.hobbiesRef = React.createRef();
    this.interestsRef = React.createRef();
  }
  state = { dob: null };
  componentDidMount() {
    this.props.userDetail();
  }

  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return <div className="ui pointing red basic label">{error}</div>;
    }
  };

  renderSchools = ({ fields }) => {
    return (
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        {fields.map((school, index) => (
          <React.Fragment key={index}>
            <div className="fields">
              <Field
                id={`school ${index + 1}`}
                name={`${school}.${index + 1}`}
                type="text"
                component={this.renderInput}
                label={`School ${index + 1}`}
              />
              <i
                onClick={() => fields.remove(index)}
                style={{ marginTop: "27px", marginLeft: "5px" }}
                className="large close icon"
              />
            </div>
          </React.Fragment>
        ))}
        <div
          className="ui labeled icon primary button"
          onClick={() => {
            fields.push({});
          }}
        >
          <i className="plus icon" />
          Add School
        </div>
      </div>
    );
  };

  renderInput = ({ input, label, id, type, meta }) => {
    const disabled =
      id == "firstName" || id == "lastName" || id == "mobile" || id == "email"
        ? "disabled"
        : "";
    const classname = `field  ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div style={{ paddingTop: "20px" }} className={classname}>
        <div className={`ui labeled ${disabled} input`}>
          <div className="ui blue label" htmlFor={id}>
            {label}
          </div>
          <input id={id} {...input} type={type} placeholder={label} />
        </div>
        {this.renderErrors(meta)}
      </div>
    );
  };

  selectDate = e => {
    this.setState({ dob: e });
  };

  onSubmit = formValues => {
    // const hobbies = this.hobbiesRef.current.value.split(",");
    // const interests = this.interestsRef.current.value.split(",");
    const hobbies = this.hobbiesRef.current.value;
    const interests = this.interestsRef.current.value;
    const values = {
      ...formValues,
      dob: this.dobRef.current.input.value,
      hobbies: hobbies,
      interests: interests
    };

    console.log(values);

    //this.props.userUpdate(values);

    this.props.reset();
    this.genderRef1.current.checked = false;
    this.genderRef2.current.checked = false;
    this.setState({ dob: null });
  };

  render() {
    console.log(this.userdata);
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
        {/* <Field
          id="oldpassword"
          name="oldpassword"
          type="password"
          label="Old Password"
          component={this.renderInput}
        />

        <Field
          id="newpassword"
          name="newpassword"
          type="password"
          label="New Password"
          component={this.renderInput}
        /> */}

        <div className="fields">
          <Field name="gender" component="radio">
            <div
              style={{ paddingTop: "20px", marginLeft: "10px" }}
              className="inline fields"
            >
              <div className="ui blue large label">Gender </div>
              <div style={{ marginLeft: "20px" }} className="field">
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

          <div
            style={{ paddingTop: "20px", marginLeft: "250px" }}
            className="field"
          >
            <div className="ui labeled input">
              <label className="ui blue label">Date of Birth</label>
              <DatePicker
                ref={this.dobRef}
                maxDate={new Date()}
                selected={this.state.dob}
                onChange={this.selectDate}
              />
            </div>
          </div>
        </div>

        <Field
          id="intro"
          name="intro"
          label="About Yourself"
          type="text"
          component={this.renderInput}
        />

        <div className="two fields">
          <div style={{ paddingTop: "20px" }} className="field">
            <div className="ui labeled input">
              <label htmlFor="hobbies" className="ui blue label">
                Hobbies
              </label>
              <div className="ui multiple search selection dropdown">
                <input
                  defaultValue=""
                  ref={this.hobbiesRef}
                  id="hobbies"
                  name="hobbies"
                  type="hidden"
                />
                <i className="dropdown icon" />
                <div className="default text">Hobbies</div>
                <div className="menu">
                  <div className="item" data-value="Books">
                    Reading Books
                  </div>
                  <div className="item" data-value="Movies">
                    Watching Movies
                  </div>
                  <div className="item" data-value="Travelling">
                    Travelling
                  </div>
                  <div className="item" data-value="Sports">
                    Playing Sports
                  </div>
                  <div className="item" data-value="Listening Music">
                    Listening Music
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "20px" }} className="field">
            <div className="ui labeled input">
              <label htmlFor="interests" className="ui blue label">
                Interests
              </label>
              <div className="ui multiple search selection dropdown">
                <input
                  defaultValue=""
                  ref={this.interestsRef}
                  id="interests"
                  name="interests"
                  type="hidden"
                />
                <i className="dropdown icon" />
                <div className="default text">Interests</div>
                <div className="menu">
                  <div className="item" data-value="Politics">
                    Politics
                  </div>
                  <div className="item" data-value="Social Activities">
                    Social Activities
                  </div>
                  <div className="item" data-value="Adventures">
                    Adventures
                  </div>
                  <div className="item" data-value="People">
                    People
                  </div>
                  <div className="item" data-value="Science and Technology">
                    Science and Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Field
          id="website"
          name="website"
          type="url"
          label="Personal Website"
          component={this.renderInput}
        />

        <FieldArray name="schools" component={this.renderSchools} />

        <button
          style={{ marginTop: "20px" }}
          className="big ui button positive"
        >
          Update
        </button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  //const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const requiredFields = ["gender"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Must enter a value";
    }
  });

  // if (values.email && !emailRegex.test(values.email)) {
  //   errors.email = "email must be of in correct form";
  // }

  // if (!values.mobile) {
  //   errors.mobile = "Must enter a value";
  // } else if (
  //   values.mobile &&
  //   !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobile)
  // ) {
  //   errors.mobile = "Invalid phone number entered";
  // }

  // if (!values.oldpassword) {
  //   errors.oldpassword = "Must enter a value";
  // } else if (values.oldpassword.length < 7 || values.oldpassword.length > 16) {
  //   errors.oldpassword = "Length must be between 7 and 16 characters long";
  // } else {
  //   var hasUpperCase = /[A-Z]/.test(values.oldpassword);
  //   var hasLowerCase = /[a-z]/.test(values.oldpassword);
  //   var hasNumbers = /\d/.test(values.oldpassword);
  //   var hasNonalphas = /\W/.test(values.oldpassword);
  //   if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 4) {
  //     errors.oldpassword =
  //       "Must contain a lower case letter, upper case letter, a number and a non-alphanumberic character";
  //   }
  // }

  // if (values.newpassword.length < 7 || values.newpassword.length > 16) {
  //   errors.newpassword = "Length must be between 7 and 16 characters long";
  // } else {
  //   var hasUpperCase = /[A-Z]/.test(values.newpassword);
  //   var hasLowerCase = /[a-z]/.test(values.newpassword);
  //   var hasNumbers = /\d/.test(values.newpassword);
  //   var hasNonalphas = /\W/.test(values.newpassword);
  //   if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 4) {
  //     errors.newpassword =
  //       "Must contain a lower case letter, upper case letter, a number and a non-alphanumberic character";
  //   }
  // }

  // if (!values.handle) {
  //   errors.handle = "Must enter a value";
  // } else if (values.handle.length > 20) {
  //   errors.handle = "Length must be less than 20";
  // }

  // if (values.firstName && !/^[a-zA-Z0-9]*$/g.test(values.firstName)) {
  //   errors.firstName = "Only Charecters and Numbers";
  // }
  // if (values.lastName && !/^[a-zA-Z0-9]*$/g.test(values.lastName)) {
  //   errors.lastName = "Only Charecters and Numbers";
  // }

  return errors;
};

const userfo = reduxForm({
  form: "UserForm",
  validate: validate
})(UserFrom);

const mapStateToProps = state => {
  return {
    userdetails: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    userDetail,
    userUpdate
  }
)(userfo);
