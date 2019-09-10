import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class image extends Component {
  constructor(props) {
    super(props);
    this.isFav = props.isFav;
  }
  setFavorite(isFav) {
    this.isFav = isFav;
    this.props.setFavorite(this.props.image);
  }
  render() {
    return (
      <div className="image">
        <Link to={"/details/" + this.props.image.id}>
          <img src={this.props.image.urls.thumb} />
        </Link>
        {this.isFav ? (
          <span onClick={() => this.setFavorite(false)}>&#9829;</span>
        ) : (
          <span onClick={() => this.setFavorite(true)}>&#9825;</span>
        )}
      </div>
    );
  }
}
