import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class TopArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topArtists: [],
    };
  }
  // Change function to componentDidMount() if I want them to display without clicking the button / to getTopTracks if I want them to display on button click
  componentDidMount() {
    spotifyApi.getMyTopArtists().then((response) => {
      console.log("top artists", response.items);
      this.setState({
        topArtists: response.items,
      });
    });
  }

  render() {
    return (
      <>
        <div className="top-artists col-4">
          <h4>User's Top Artists</h4>
          <table className="top-artists-table" align="center">
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Artist</th>
                <th>Popularity</th>
                <th>Genres</th>
              </tr>
            </thead>
            <tbody>
              {this.state.topArtists.map((artist, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={artist.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {artist.name}
                    </a>
                  </td>
                  <td>{artist.popularity}</td>
                  <td>
                    {artist.genres[0]}, {artist.genres[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TopArtists;
