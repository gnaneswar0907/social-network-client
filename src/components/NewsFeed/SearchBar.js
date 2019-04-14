import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="ui fluid search">
        <div className="field">
          <div className="ui icon input">
            <input
              style={{ width: "600px" }}
              className="prompt"
              type="text"
              placeholder="search"
            />
            <i className="search icon" />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
