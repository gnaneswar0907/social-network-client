import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { addMessage } from "../../../actions/MessagesActions";

class CreateMessage extends Component {
  renderInput = ({ input, type }) => {
    return (
      <div className="ui fluid icon input">
        <input {...input} type="text" placeholder="Reply with a message..." />
        <i className="paper plane icon" />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    //this.props.addMessage(2, 2, formValues.reply);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <div className="ui field">
          <Field name="reply" component={this.renderInput} />
        </div>
      </form>
    );
  }
}

const createMsg = reduxForm({ form: "CreateMessageForm" })(CreateMessage);

export default connect(
  null,
  {
    addMessage
  }
)(createMsg);
