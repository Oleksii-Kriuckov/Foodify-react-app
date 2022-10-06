import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Random from './pages/Random';
import { Favourites } from './pages/Favourites'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Random />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
