import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <nav className="navbar navbar-light ">
          <a id="brand" href="www.google.com" className="navbar-brand">
            Vide-yours
          </a>
          <form onSubmit={this.onFormSubmit} className="form-inline">
            <input
              id="search"
              className="form-control mr-sm-2"
              type="text"
              value={this.state.searchTerm}
              onChange={this.onSearchChange}
            />
            <button
              onClick={this.onFormSubmit}
              className="btn my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NavBar;
