import './App.css';
import NotesProcess from './components/process/process';
import Overlay from './components/overlay';

function App() {
  return (
    <div className="App">
      <Overlay>
        <NotesProcess />
      </Overlay>
    </div>
  );
}

export default App;
