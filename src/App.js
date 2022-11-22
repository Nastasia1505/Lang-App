import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import styles from './App.css';
import Games from './components/Games/Games';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Learn from './components/Learn/Learn';
import Library from './components/Library/Library';

function App() {

  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);

  console.log(library)

  return (
    <BrowserRouter >
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn library={library} />} />
         
          <Route path='/games' element={<Games />} />
          <Route path='/library' element={<Library library={library} setLibrary={setLibrary} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
