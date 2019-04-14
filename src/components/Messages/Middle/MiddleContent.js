import React, { Component } from "react";
import { connect } from "react-redux";

import faker from "faker";

class MiddleContent extends Component {
  renderMessages = () => {};

  render() {
    const msgColor = this.props.changedColor;
    console.log(msgColor);
    return (
      <div className="ui big middle aligned relaxed list">
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              Hi ! How are you????
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right floated middle aligned content">
            <div className={`ui right pointing ${msgColor} inverted label`}>
              Shut the fuck up !!!!!
            </div>
            <img
              className="ui avatar spaced image"
              src={faker.image.avatar()}
            />
          </div>
        </div>
        <div className="item">
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="middle aligned content">
            <div className={`ui left pointing ${msgColor} basic label`}>
              But yyyyyyyy!!! yy like that
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    changedColor: state.color
  };
};

export default connect(mapStateToProps)(MiddleContent);
