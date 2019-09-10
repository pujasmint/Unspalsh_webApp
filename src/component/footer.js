import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link exact to={`/`} activeClassName="selected">
          <span className="icon">&#128269;</span>
          <span className="size">Search</span>
        </Link>

        <Link exact to={`/favorite`} activeClassName="selected">
          <span className="icon">&#9829;</span>
          <span className="size">Favorite</span>
        </Link>
      </div>
    );
  }
}
