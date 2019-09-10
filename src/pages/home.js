import React, { Component } from "react";
import Search from "../component/search";
import Image from "../component/image";

export default class home extends Component {
  render() {
    return (
      <div>
        <Search getSearchKey={this.props.getSearchKey}></Search>
        <div className="list">
          <h2>Daily Pictures</h2>
          {this.props.allImages.map(image => (
            <Image
              key={image.id}
              image={image}
              setFavorite={this.props.setFavorite}
              inFav={false}
            />
          ))}
        </div>
      </div>
    );
  }
}
