import React, { Component } from "react";
import "./App.scss";
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
      nowPlaying: {
        name: "Not Checked",
        artist: "",
        albumArt: "",
        trackUrl: "",
      },
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

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log("response", response);
      this.setState({
        nowPlaying: {
          name: response.item.name,
          artist: response.item.artists[0].name,
          albumArt: response.item.album.images[0].url,
          trackUrl: response.item.external_urls.spotify,
        },
      });
    });
  }

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>Login with Spotify</button>
        </a>
        <div>
          Now Playing:{" "}
          <a
            href={this.state.nowPlaying.trackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.nowPlaying.name}
          </a>{" "}
          by {this.state.nowPlaying.artist}
        </div>
        <div>
          {this.state.nowPlaying.albumArt === "" ? null : (
            <img
              src={this.state.nowPlaying.albumArt}
              style={{ height: 300 }}
              alt={`${this.state.nowPlaying.name} album cover`}
            />
          )}
        </div>
        {this.state.loggedIn && (
          <button onClick={() => this.getNowPlaying()}>
            Check what's playing
          </button>
        )}
      </div>
    );
  }
}

export default App;
