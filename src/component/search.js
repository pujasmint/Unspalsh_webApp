import React, { Component } from "react";

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ""
    };
  }
  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearchKey(this.state.key);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="key"
            placeholder="Search Pictures"
            onChange={this.onChangeInput}
          />
          <span onClick={() => this.props.getSearchKey(this.state.key)}>
            &#128269;
          </span>
        </form>
      </div>
    );
  }
}
