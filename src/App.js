import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesProcess from './components/process/process';
import Overlay from './components/overlay';
import LandingPage from './pages/landing-page';
import SignupPage from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/notes" element={<Overlay><NotesProcess /></Overlay>} />
          <Route path="/home" element={<Overlay><LandingPage /></Overlay>} />
          <Route path="/" element={<><LoginPage/> <SignupPage /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;