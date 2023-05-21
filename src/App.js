import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesProcess from './Components/process/process';
import Overlay from './Components/overlay';
import LandingPage from './pages/landing-page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/notes" element={<Overlay><NotesProcess /></Overlay>} />
          <Route path="/" element={<Overlay><LandingPage /></Overlay>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;