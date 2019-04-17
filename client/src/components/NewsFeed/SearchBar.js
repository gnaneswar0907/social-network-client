import React from "react";

class SearchBar extends React.Component {
  state = { filter: "", keyword: "" };
  renderDropdownFilters = () => {
    if (this.props.filters === "users") {
      return (
        <React.Fragment>
          <div
            onClick={() => {
              this.setState({ filter: "school" });
            }}
            className="item"
          >
            <i class="olive circle icon" />
            school
          </div>
          <div
            onClick={() => {
              this.setState({ filter: "hobbies" });
            }}
            className="item"
          >
            <i class="violet circle icon" />
            hobbies
          </div>
          <div
            onClick={() => {
              this.setState({ filter: "place" });
            }}
            className="item"
          >
            <i class="orange circle icon" />
            place
          </div>
        </React.Fragment>
      );
    } else if (this.props.filters === "posts") {
      return (
        <React.Fragment>
          <div
            onClick={() => {
              this.setState({ filter: "school" });
            }}
            className="item"
          >
            <i class="olive circle icon" />
            Most Recent
          </div>
          <div
            onClick={() => {
              this.setState({ filter: "hobbies" });
            }}
            className="item"
          >
            <i class="violet circle icon" />
            Most Liked
          </div>
          <div
            onClick={() => {
              this.setState({ filter: "place" });
            }}
            className="item"
          >
            <i class="orange circle icon" />
            Most Commented
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    return (
      <form data-filter="repositories" className="ui fluid search">
        <div className="ui left icon right labeled input">
          <i className="search icon" />
          <input
            style={{ width: "600px" }}
            className="prompt"
            type="text"
            value={this.state.keyword}
            onChange={e => this.setState({ keyword: e.target.value })}
            placeholder="search"
          />
          <div className="ui labeled icon dropdown circular label">
            <i
              style={{ marginLeft: "8px", marginTop: "6px" }}
              className="filter icon"
            />
            <div className="menu">
              <div className="header">Filter By</div>
              <div className="divider" />
              {this.renderDropdownFilters()}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
