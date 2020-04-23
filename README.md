# spotify-react
Playing around with Spotify's API using React. I have used <a href="https://github.com/jonnyk20/spotify-node-react-starter-kit">jonnyk20's tutorial and repo</a> as a starting point. Instructions below are taken from his own repo. If you eventually use this (thank you), please create a Spotify app (see 1) below) and use your own client ID + secret.

## Getting Started

### 1) Create an App
- Visit https://developer.spotify.com/ 
- Log in and create an app
- Enter http//localhost:8888/callback as the redirect uri
- Save your changes
- Copy down the following: Redirect uri, client id, client secret


### 2)  Start Auth Server
- Navigate to the auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Paste in the redirect uri, client id, and client secret you copied in step 1
- Run the Server `node authorization_code/app.js`

### 3)  Start Client
- Navigate to the auth-server directory `cd client`
- Install the dependencies `npm install`
- Run the Server `npm start`

### 4)  Use the App
- Make sure you have a song playing (or paused) on a Spotify app
- Visit http://localhost:3000
- Click 'Log in with Spotify' and log in
- Click the 'Check what's playing' button
- You should see info about your track
- Additionally, you'll have access to your top tracks and last 20 played tracks
- Bonus: if you want to know which songs are in the pipeline for next week's <a href="http://bit.ly/bolachasnowplaying" target="_blank" rel="noopener noreferrer">Bolachas Now Playing</a> — a weekly Spotify playlist containing roughly two hours of brand new tracks that you should follow right now — just click the 'Get Tracks' button below. If you don't care about it, just go to line 15 on components/BolachasNowPlaying.js and replace the URI with that of your playlist of choice.
