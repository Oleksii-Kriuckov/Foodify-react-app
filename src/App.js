import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Random from './pages/Random';
import { Favorites } from './pages/Favorites'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Random />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
