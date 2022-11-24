import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import styles from './App.css';
import NavGames from './components/Games/AppGames/WriteCorrectWord/NavGames';
import WriteIt from './components/Games/AppGames/WriteCorrectWord/WriteIt';
import Games from './components/Games/Games';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Learn from './components/Learn/Learn';
import Library from './components/Library/Library';
import Translator from './components/Translator/Translator';

function App() {

  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  const [playWords, setPlayWords] = useState([library.slice(-10).lenght])

  return (
    <BrowserRouter >
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn library={library} />} />
          <Route path='/translator' element={<Translator />} />
          <Route path='/games' element={<Games />} />
          <Route path='/games/write-it' element={<WriteIt playWords= {playWords}z/>} />
          <Route path='/library' element={<Library library={library} setLibrary={setLibrary} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
