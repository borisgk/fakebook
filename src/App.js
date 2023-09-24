import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SongList from './components/SongList'
import Song from './components/Song';
import SongHTML from './components/SongHTML';
import songs from './data/lyrics.json'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>FakeBook - songs with chords</h1>
      </div>
      <Routes>
        <Route path="/" element={<SongList songs = {songs} />} />
        <Route path="/songs/:songID" element={<Song songs = {songs} />} />
        <Route path="/songshtml/:songID" element={<SongHTML songs = {songs} />} />
      </Routes>
    </Router>
  )
}

export default App;
