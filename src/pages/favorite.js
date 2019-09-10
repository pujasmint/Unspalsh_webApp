import React, { Component } from "react";
import Search from "../component/search";
import Image from "../component/image";

export default class favorite extends Component {
  render() {
    return (
      <div>
        <Search getSearchKey={this.props.getSearchKey}></Search>
        <div className="list">
          <h2>Favorites</h2>
          {this.props.favImages.map(image => (
            <Image
              key={image.id}
              image={image}
              setFavorite={this.props.setFavorite}
              isFav={true}
            />
          ))}
        </div>
      </div>
    );
  }
}
