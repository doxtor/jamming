import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }
    tracks.push(track);  
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let result = tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: result})
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    let trackUris = this.state.playlistTracks.map(track => track.uri)
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks} 
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
