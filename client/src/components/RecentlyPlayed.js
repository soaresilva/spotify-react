import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
// import { DateTime } from "luxon";
// TODO: use luxon to convert played track timestamp to local timezone (currently UTC)

const spotifyApi = new SpotifyWebApi();

class RecentlyPlayed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTracks: [],
    };
  }
  // Change function to componentDidMount() if I want them to display without clicking the button
  componentDidMount() {
    spotifyApi.getMyRecentlyPlayedTracks().then((response) => {
      console.log("recently played", response.items);
      this.setState({
        recentTracks: response.items,
      });
    });
  }

  render() {
    return (
      <>
        {/* <button onClick={() => this.getRecentlyPlayedTracks()}>
          Check recently played tracks
        </button> */}
        <div className="recent-tracks col-6">
          <h4>Recently Played Tracks</h4>
          {this.state.recentTracks.map((track, index) => (
            <p key={index}>
              <strong>{track.track.artists[0].name}</strong>,{" "}
              <i>
                <a
                  href={track.track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {track.track.name}
                </a>
              </i>{" "}
              (at {track.played_at.slice(11, 16)})
            </p>
          ))}
        </div>
      </>
    );
  }
}

export default RecentlyPlayed;
