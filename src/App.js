import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesProcess from './components/process/process';
import Overlay from './components/overlay';
import LandingPage from './pages/landing-page';
import TestsList from './components/test/testslist';
import FlashCardList from './components/test/flashcards';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/generate" element={<Overlay><NotesProcess /></Overlay>} />
          <Route path="/" element={<Overlay><LandingPage /></Overlay>} />
          <Route path="/tests" element={<Overlay><TestsList /></Overlay>} />
          <Route path="/flashcards" element={<Overlay><FlashCardList /></Overlay>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;