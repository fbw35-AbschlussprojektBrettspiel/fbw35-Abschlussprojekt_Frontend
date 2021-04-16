import './App.css';
import Startseite from './components/Startseite';
import Spielseite from './components/Spielseite';
import { useSelector } from 'react-redux';

function App() {
  const page = useSelector(state => state.page);

  return (
    <div className="App">
      {page === 'startseite' ?
        <Startseite /> :
        <Spielseite />
      }
    </div>
  );
}

export default App;
