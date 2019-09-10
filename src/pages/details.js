import React, { Component } from "react";
import ImageService from "../api/imageService";
import { withRouter } from "react-router-dom";

class details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.service = new ImageService();
  }

  componentDidMount() {
    this.service
      .detail(this.props.match.params.id)
      .then(response => {
        this.setState({ image: response });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  render() {
    return (
      <div className="details">
        {this.state.image ? (
          <>
            <img src={this.state.image.urls.small} />
            <span className="back" onClick={() => this.props.history.goBack()}>
              &#8592;
            </span>
            <div className="fields">
              <div className="item">
                <span className="key">Downloads</span>
                <span className="Value">{this.state.image.downloads}</span>
              </div>
              <div className="item">
                <span className="key">Country</span>
                <span className="Value">
                  {this.state.image.location.country || "NA"}
                </span>
              </div>
              <div className="item">
                <span className="key">User</span>
                <span className="Value">
                  {this.state.image.user.username || "NA"}
                </span>
              </div>
              <div className="item">
                <span className="key">Likes</span>
                <span className="Value">{this.state.image.likes || "NA"}</span>
              </div>
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

export default withRouter(details);
