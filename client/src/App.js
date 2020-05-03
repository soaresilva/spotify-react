import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";
import BolachasNowPlaying from "./components/BolachasNowPlaying";
import RecentlyPlayed from "./components/RecentlyPlayed";
import TopTracks from "./components/TopTracks";
import TopArtists from "./components/TopArtists";
// import Lyrics from "./components/Lyrics";

import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      user: "",
    };
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    spotifyApi.getGeneric("https://api.spotify.com/v1/me").then((response) => {
      console.log("getGeneric", response);
      this.setState({
        user: response,
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          {this.state.loggedIn ? (
            <h3>Welcome {this.state.user.display_name}!</h3>
          ) : (
            <a href="http://localhost:8888">
              <button>Login with Spotify</button>
            </a>
          )}
          <NowPlaying loggedIn={this.state.loggedIn} />
          {/* <Lyrics /> */}
          <div className="list-of-tracks container-flex">
            <RecentlyPlayed />
            <TopTracks />
            <TopArtists />
          </div>
          <BolachasNowPlaying />
        </div>
      </>
    );
  }
}

export default App;
