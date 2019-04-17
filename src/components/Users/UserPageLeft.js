import React, { Component } from "react";
import { Link } from "react-router-dom";

import faker from "faker";
import { findfriends, userpage } from "../../urls";
import "./Overlay.css";

export default class UserPageLeft extends Component {
  state = { openInput: false };

  renderIntro = () => {
    if (this.state.openInput) {
      return (
        <div className="middle aligned content">
          <div className="header">
            <i className="bullhorn icon" /> Intro
          </div>
          <div className="field">
            <textarea
              rows="3"
              style={{ width: "100%", marginTop: "5px", marginBottom: "5px" }}
            />

            <div className="ui right floated mini buttons">
              <div className="ui positive button">save</div>
              <div className="or" />
              <div
                onClick={() => {
                  this.state.openInput === true
                    ? this.setState({ openInput: false })
                    : this.setState({ openInput: true });
                }}
                className="ui right negative button"
              >
                cancel
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="middle aligned content">
          <div className="right floated">
            <div className="ui disabled fluid transparent  input">
              <input type="text" />
              <i
                onClick={() => {
                  this.state.openInput === true
                    ? this.setState({ openInput: false })
                    : this.setState({ openInput: true });
                }}
                className="edit icon"
              />
            </div>
          </div>
          <div className="header">
            <i className="bullhorn icon" /> Intro
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="ui cards">
        <div style={{ marginTop: "15px" }} className="ui fluid card">
          {this.renderIntro()}
          <div className="content">
            <div className="meta">
              <i className="map marker alternate icon" /> From Dallas
            </div>
            <div className="meta">
              <i className="clock outline icon" /> joined coolgram since 2013
            </div>
            <div
              style={{ padding: "8px" }}
              className="ui center aligned spaced small spaced images"
            >
              <img
                className="ui image"
                alt="uplaoded"
                src={faker.image.image()}
              />
              <img
                className="ui image"
                alt="uplaoded"
                src={faker.image.image()}
              />
              <img
                className="ui image"
                alt="uplaoded"
                src={faker.image.image()}
              />
              <img
                className="ui image"
                alt="uplaoded"
                src={faker.image.image()}
              />
            </div>
          </div>
        </div>
        <div className="ui overlay">
          <div className="ui fluid card">
            <div className="content">
              <Link to={findfriends} className="right floated meta">
                Find Friends
              </Link>
              <div className="header">
                <i className="users icon" /> Friends
              </div>
            </div>
            <div className="content">
              <div className="ui three fluid cards">
                <Link to={`${userpage}/id`} className="card">
                  <div className="image">
                    <img alt="friendPhoto" src={faker.image.avatar()} />
                  </div>
                  <div className="extra">{faker.name.firstName()}</div>
                </Link>
                <Link to={`${userpage}/id`} className="card">
                  <div className="image">
                    <img alt="friendPhoto" src={faker.image.avatar()} />
                  </div>
                  <div className="extra">{faker.name.firstName()}</div>
                </Link>
                <Link to={`${userpage}/id`} className="card">
                  <div className="image">
                    <img alt="friendPhoto" src={faker.image.avatar()} />
                  </div>
                  <div className="extra">{faker.name.firstName()}</div>
                </Link>
                <Link to={`${userpage}/id`} className="card">
                  <div className="image">
                    <img alt="friendPhoto" src={faker.image.avatar()} />
                  </div>
                  <div className="extra">{faker.name.firstName()}</div>
                </Link>
                <Link to={`${userpage}/id`} className="card">
                  <div className="image">
                    <img alt="friendPhoto" src={faker.image.avatar()} />
                  </div>
                  <div className="extra">{faker.name.firstName()}</div>
                </Link>
                <Link to={`${userpage}/id`} className="card">
                  <div className="image">
                    <img alt="friendPhoto" src={faker.image.avatar()} />
                  </div>
                  <div className="extra">{faker.name.firstName()}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
