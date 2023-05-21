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
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/generate" element={<Overlay currentChildName="Generate Questions"><NotesProcess /></Overlay>} />
            <Route path="/home" element={<Overlay currentChildName="Home" ><LandingPage /></Overlay>} />
            <Route path="/" element={<><LoginPage /> <SignupPage /></>} />
            <Route path="/tests" element={<Overlay currentChildName="Tests"><TestsList /></Overlay>} />
            <Route path="/flashcards/:id" element={<Overlay currentChildName="Tests"><FlashCardList /></Overlay>} />
            <Route path="/practice" element={<Overlay currentChildName="Tests"><PracticeTest /></Overlay>} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;