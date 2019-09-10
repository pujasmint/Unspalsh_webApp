import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "./pages/details";
import Favorite from "./pages/favorite";
import Footer from "./component/footer";
import Home from "./pages/home";
import ImageService from "./api/imageService";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.service = new ImageService();
    this.state = {
      favImages: [],
      allImages: []
    };
  }

  setFavorite = image => {
    if (this.state.favImages.find(i => i.id === image.id)) {
      this.setState({
        favImages: this.state.favImages.filter(i => i.id !== image.id)
      });
    } else {
      this.setState({ favImages: [image, ...this.state.favImages] });
    }
  };

  getSearchKey = query => {
    this.props.history.push("/");
    this.service
      .search(query)
      .then(response => {
        this.setState({ allImages: response.results });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/details/:id" component={Details} />
          <Route
            path="/favorite"
            render={props => (
              <Favorite
                {...props}
                getSearchKey={this.getSearchKey}
                setFavorite={this.setFavorite}
                favImages={this.state.favImages}
              />
            )}
          />
          <Route
            path="/"
            render={props => (
              <Home
                {...props}
                setFavorite={this.setFavorite}
                getSearchKey={this.getSearchKey}
                allImages={this.state.allImages}
              />
            )}
          />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(App);
