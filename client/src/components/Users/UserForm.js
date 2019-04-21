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
  }
  state = { dob: null };
  componentDidMount() {
    //this.props.userDetail(this.props.match.params.id);
  }
  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  };

  // addSchool = fields => {
  //   if (fields.length == this.state.schools) {
  //     return (
  //       <i
  //         onClick={() => {
  //           this.setState({ schools: this.state.schools + 1 });
  //         }}
  //         style={{
  //           marginLeft: "10px",
  //           marginTop: "5px"
  //         }}
  //         className="large plus icon"
  //       />
  //     );
  //   } else {
  //     return;
  //   }
  // };

  renderSchools = ({ fields }) => {
    return (
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        {fields.map((school, index) => (
          <React.Fragment key={index}>
            <Field
              id={`school ${index + 1}`}
              name={`${school}.${index + 1}`}
              type="text"
              component={this.renderInput}
              label={`School ${index + 1}`}
            />
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

  renderInput = ({ input, label, position, id, type, meta }) => {
    //const classname = `field ${meta.error && meta.touched ? "error" : ""}`;
    if (meta.touched && meta.error) {
      return (
        <div
          style={{ paddingTop: "20px" }}
          id="formpop"
          data-tooltip={meta.error}
          data-inverted=""
          data-position={position}
          className="field error"
        >
          <div className="ui labeled input">
            <label className="ui blue label" htmlFor={id}>
              {label}
            </label>
            <input id={id} {...input} type={type} placeholder={label} />
          </div>
          {/* <span className="ui inverted popup">{meta.error}</span> */}
          {/* {this.renderErrors(meta)} */}
        </div>
      );
    } else {
      return (
        <div style={{ paddingTop: "20px" }} className="field">
          <div className="ui labeled input">
            <label className="ui blue label" htmlFor={id}>
              {label}
            </label>
            <input id={id} {...input} type={type} placeholder={label} />
          </div>
        </div>
      );
    }
  };

  selectDate = e => {
    this.setState({ dob: e });
  };

  onSubmit = formValues => {
    const hobbies = this.hobbiesRef.current.value.split(",");
    const values = {
      ...formValues,
      dob: this.dobRef.current.input.value,
      hobbies: hobbies
    };

    console.log(values);

    //this.props.userUpdate(values);

    this.props.reset();
    this.genderRef1.current.checked = false;
    this.genderRef2.current.checked = false;
    this.hobbiesRef.current.value = "";
    this.setState({ dob: null });
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
            position="left center"
            component={this.renderInput}
          />
          <Field
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            position="right center"
            component={this.renderInput}
          />
        </div>
        <div className="fields">
          <Field
            id="mobile"
            name="mobile"
            label="Mobile Number"
            type="tel"
            position="left center"
            component={this.renderInput}
          />
          <Field
            id="email"
            name="email"
            label="Email"
            type="email"
            position="right center"
            component={this.renderInput}
          />
        </div>
        <Field
          id="oldpassword"
          name="oldpassword"
          type="password"
          label="Old Password"
          position="right center"
          component={this.renderInput}
        />

        <Field
          id="newpassword"
          name="newpassword"
          type="password"
          label="New Password"
          position="right center"
          component={this.renderInput}
        />

        <Field name="gender" component="radio">
          <div style={{ paddingTop: "20px" }} className="inline fields">
            <label className="ui blue label">Gender </label>
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

        <div className="fields">
          <div style={{ paddingTop: "20px" }} className="field">
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

          <div style={{ paddingTop: "20px" }} className="field">
            <div className="ui labeled input">
              <label htmlFor="hobbies" className="ui blue label">
                Hobbies
              </label>
              <div className="ui multiple search selection dropdown">
                <input
                  ref={this.hobbiesRef}
                  id="hobbies"
                  name="hobbies"
                  type="hidden"
                />
                <i className="dropdown icon" />
                <div className="default text">Hobbies</div>
                <div className="menu">
                  <div className="item" data-value="Books">
                    Books
                  </div>
                  <div className="item" data-value="Movies">
                    Movies
                  </div>
                  <div className="item" data-value="TV-Series">
                    TV-Series
                  </div>
                  <div className="item" data-value="Sports">
                    Sports
                  </div>
                  <div className="item" data-value="Music">
                    Music
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
          position="right center"
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

  if (!values.oldpassword) {
    errors.oldpassword = "Must enter a value";
  } else if (values.oldpassword.length < 7) {
    errors.oldpassword = "Length must be greater than 7";
  }

  if (!values.newpassword) {
    errors.newpassword = "Must enter a value";
  } else if (values.newpassword.length < 7) {
    errors.newpassword = "Length must be greater than 7";
  }

  if (values.firstName && !/^[a-zA-Z]*$/g.test(values.firstName)) {
    errors.firstName = "Only Charecters and Numbers";
  }
  if (values.lastName && !/^[a-zA-Z]*$/g.test(values.lastName)) {
    errors.lastName = "Only Charecters and Numbers";
  }

  return errors;
};

const userfo = reduxForm({
  form: "UserForm",
  validate: validate
})(UserFrom);

const mapStateToProps = (state, ownProps) => {
  return {
    userDetails: this.state.users[ownProps.match.params.id]
  };
};

export default connect(
  null,
  {
    userDetail,
    userUpdate
  }
)(userfo);
