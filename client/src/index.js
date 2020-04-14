import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { SpotifyApiContext } from "react-spotify-api";

ReactDOM.render(
  <React.StrictMode>
    {/* <SpotifyApiContext.Provider value={token}> */}
    <App />
    {/* </SpotifyApiContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
