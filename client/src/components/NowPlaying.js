import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      nowPlaying: {
        name: "Not Checked",
        artist: "",
        albumArt: "",
        trackUrl: "",
      },
    };
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlayingTrack().then((response) => {
      console.log("now playing", response);
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
      <>
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
        <div>
          {this.state.loggedIn && (
            <button onClick={() => this.getNowPlaying()}>
              Check what's playing
            </button>
          )}
        </div>
      </>
    );
  }
}

export default NowPlaying;
