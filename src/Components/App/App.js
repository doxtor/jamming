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
        {name: 'playlist name', artist: 'fave artist', album: 'fave album', id: 1},
        {name: 'playlist name2', artist: 'fave artist2', album: 'fave album2', id: 2},
        {name: 'playlist name3', artist: 'fave artist3', album: 'fave album3', id: 3}
      ]
    }

  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
