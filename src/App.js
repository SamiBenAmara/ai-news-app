import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesProcess from './components/process/process';
import Overlay from './components/overlay';
import LandingPage from './pages/landing-page';
import TestsList from './components/test/testslist';
import FlashCardList from './components/test/flashcards';
import PracticeTest from './components/test/practice_test';
import SignupPage from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/generate" element={<Overlay><NotesProcess /></Overlay>} />
          <Route path="/home" element={<Overlay><LandingPage /></Overlay>} />
          <Route path="/" element={<><LoginPage/> <SignupPage /></>} />
          <Route path="/tests" element={<Overlay><TestsList /></Overlay>} />
          <Route path="/flashcards" element={<Overlay><FlashCardList /></Overlay>} />
          <Route path="/practice" element={<Overlay><PracticeTest /></Overlay>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;