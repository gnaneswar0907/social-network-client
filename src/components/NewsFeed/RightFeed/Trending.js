import React, { Component } from "react";

export default class Trending extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <i className="left floated icon chart line" />
          <div className="header">Trending</div>
        </div>
        <div className="content">
          <div class="ui relaxed divided selection link list">
            <div class="item">
              <i class="circle tiny middle aligned icon" />
              <div class="content">
                <a class="header">News Item 1</a>
                <div class="meta">
                  <span className="date">10 mins ago</span>
                </div>
              </div>
            </div>
            <div class="item">
              <i class="circle tiny middle aligned icon" />
              <div class="content">
                <a class="header">News Item 2</a>
                <div class="meta">
                  <span className="date">22 mins ago</span>
                </div>
              </div>
            </div>
            <div class="item">
              <i class="circle tiny middle aligned icon" />
              <div class="content">
                <a class="header">News Item 3</a>
                <div class="meta">
                  <span className="date">34 mins ago</span>
                </div>
              </div>
            </div>
            <div class="item">
              <i class="circle tiny middle aligned icon" />
              <div class="content">
                <a class="header">News Item 4</a>
                <div class="meta">
                  <span className="date">34 mins ago</span>
                </div>
              </div>
            </div>
            <div class="item">
              <i class="circle tiny middle aligned icon" />
              <div class="content">
                <a class="header">News Item 5</a>
                <div class="meta">
                  <span className="date">34 mins ago</span>
                </div>
              </div>
            </div>
            <div className="link item">
              <div className="center aligned content">
                Show more
                <i className="caret down large middle aligned icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
