import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class BolachasNowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTracks: [],
    };
  }
  // Change function to componentDidMount() if I want them to display without clicking the button
  getBNP() {
    spotifyApi.getPlaylistTracks("6yoVgSpIgriempnYrj7MgA").then((response) => {
      console.log("BNP", response.items);
      this.setState({
        playlistTracks: response.items,
      });
    });
  }

  render() {
    return (
      <>
        <div className="bnp">
          <h4>
            Next week's{" "}
            <a
              href="http://bit.ly/bolachasnowplaying"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bolachas Now Playing
            </a>{" "}
            tracks are...{" "}
            {<button onClick={() => this.getBNP()}>Get tracks</button>}
          </h4>

          {this.state.playlistTracks.map((track, index) => (
            <p key={index} className="bnp-tracks">
              {track.track.artists[0].name} - {track.track.name}{" "}
              {track.track.artists[1]
                ? `(feat. ${track.track.artists[1].name})`
                : ""}
            </p>
          ))}
          {/* TODO: Calculate the total running time of the playlist (getting the duration_ms of all tracks, add it up, convert to hh:mm:ss) */}
          {/* <p>Total running time: {this.state.playlistTracks.duration_ms}</p> */}
        </div>
      </>
    );
  }
}

export default BolachasNowPlaying;
