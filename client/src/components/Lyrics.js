// TODO: implement lyric search with either Genius API or something else.

import React, { Component } from "react";

class Lyrics extends Component {
  constructor(props) {
    super(props);
  }

  getCurrentSongLyrics() {
    const artist = "John Prine";
    const title = "Lake Marie";
    fetch(
      `https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "6fb58b95ccmsh9ad489931999458p1a8ecejsne06f0f513e3e",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // getLyrics(options).then((lyrics) => {
    //   console.log("lyrics", lyrics);
    // });
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.getCurrentSongLyrics()}>
            Find lyrics
          </button>
        </div>
      </>
    );
  }
}

export default Lyrics;
