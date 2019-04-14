import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CirclePicker } from "react-color";

import faker from "faker";
import { changeColor } from "../../../actions/MessagesActions";

class RightTab extends Component {
  state = { dropdown: false, showColorPicker: false };

  handleColorChange = color => {
    //console.log(color);
    this.props.changeColor(color.hex);
  };

  rednerColorPicker = () => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "black",
      "grey"
    ];
    if (this.state.showColorPicker) {
      return (
        <div style={{ marginLeft: "150px" }} className="item">
          <div className="center aligned content">
            <CirclePicker
              colors={colors}
              color={this.state.color}
              onChangeComplete={this.handleColorChange}
            />
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  renderOptions = () => {
    if (this.state.dropdown) {
      return (
        <div className="ui very relaxed link items">
          <div
            onClick={() => {
              this.state.showColorPicker === true
                ? this.setState({ showColorPicker: false })
                : this.setState({ showColorPicker: true });
            }}
            className="item"
          >
            <a className="middle aligned content">
              <i className="large paint brush spaced icon" />
              Change Color
            </a>
          </div>
          {this.rednerColorPicker()}
          <Link to="/user" className="item">
            <div className="middle aligned content">
              <i className="large search spaced icon" />
              View Profile
            </div>
          </Link>
        </div>
      );
    } else {
      return;
    }
  };
  render() {
    const iconClass =
      this.state.dropdown === true
        ? "large caret down icon"
        : "large caret left icon";
    return (
      <div
        style={{ marginTop: "59px" }}
        className="ui selection very relaxed list"
      >
        <div className="item">
          <div className="middle aligned content">
            <div className="ui mini circular spaced image">
              <img alt="profilephoto" src={faker.image.avatar()} />
            </div>
            User Name
          </div>
        </div>
        <div className="ui horizantal divider" />
        <div
          className="item"
          onClick={() => {
            this.state.dropdown === true
              ? this.setState({ dropdown: false })
              : this.setState({ dropdown: true });
          }}
        >
          <div className="content">
            Options
            <div className="right floated icon">
              <i className={iconClass} />
            </div>
          </div>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

export default connect(
  null,
  {
    changeColor
  }
)(RightTab);
