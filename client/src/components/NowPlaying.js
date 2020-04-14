import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      nowPlaying: {
        name: "Click below!",
        artist: "",
        albumArt: "",
        trackUrl: "",
      },
    };
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlayingTrack().then((response) => {
      console.log("now playing", response);
      if (!response) {
        this.setState({
          nowPlaying: {
            name: "You are not streaming a track!",
            artist: "Go play something and then hit the button below.",
            albumArt: "",
            trackUrl: "",
          },
        });
      } else
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
              style={{ height: 250 }}
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
