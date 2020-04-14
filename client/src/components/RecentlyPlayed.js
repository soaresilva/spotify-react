import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { DateTime } from "luxon";

const spotifyApi = new SpotifyWebApi();

class RecentlyPlayed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      recentTracks: [],
    };
  }
  // Change function to componentDidMount() if I want them to display without clicking the button
  getRecentlyPlayedTracks() {
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
        <button onClick={() => this.getRecentlyPlayedTracks()}>
          Check recently played tracks
        </button>
        {this.state.recentTracks.map((track, index) => (
          <div className="recent-tracks" key={index}>
            <div>
              {track.track.artists[0].name}, {track.track.name} (at{" "}
              {track.played_at.slice(11, 16)})
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default RecentlyPlayed;
