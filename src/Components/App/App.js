import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: 'dora', artist: 'nobi', album: 'doraemon', id: 1},
        {name: 'dora2', artist: 'nobi2', album: 'doraemon2', id: 2},
        {name: 'dora3', artist: 'nobi3', album: 'doraemon3', id: 3}
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'playlist name', artist: 'fave artist', album: 'fave album', id: 4},
        {name: 'playlist name2', artist: 'fave artist2', album: 'fave album2', id: 5},
        {name: 'playlist name3', artist: 'fave artist3', album: 'fave album3', id: 6}
      ]
    };

    this.addTrack = this.addTrack.bind(this);

  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }
    tracks.push(track);  
    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
