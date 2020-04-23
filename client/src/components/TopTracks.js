import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class TopTracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTracks: [],
    };
  }
  // Change function to componentDidMount() if I want them to display without clicking the button / to getTopTracks if I want them to display on button click
  componentDidMount() {
    spotifyApi.getMyTopTracks().then((response) => {
      console.log("top tracks", response.items);
      this.setState({
        topTracks: response.items,
      });
    });
  }

  render() {
    return (
      <>
        {/* <button onClick={() => this.getTopTracks()}>Check top tracks</button> */}
        <div className="top-tracks col-6">
          <h4>User's Top Tracks</h4>
          {this.state.topTracks.map((track, index) => (
            <p key={index}>
              {index + 1}. <strong>{track.artists[0].name}</strong>,{" "}
              <i>
                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {track.name}
                </a>{" "}
                {track.artists[1] ? `(feat. ${track.artists[1].name})` : ""}
              </i>
            </p>
          ))}
        </div>
      </>
    );
  }
}

export default TopTracks;
