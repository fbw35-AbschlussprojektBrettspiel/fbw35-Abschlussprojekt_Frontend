import './App.css';
import { useState } from 'react';
import Startseite from './components/Startseite';
import Spielseite from './components/Spielseite';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  // Statevariable, die festlegt, welche Seite ganz oben im App gerendert wird
  // später können wir sie in Redux State schreiben, um uns das Runterreichen mit props zu sparen
  const [page, setPage] = useState('startseite')

  return (
    <Provider store={store}>
      <div className="App">
        {page === 'startseite' ?
          <Startseite setPage={setPage} /> :
          <Spielseite setPage={setPage} />
        }
      </div>
    </Provider>
  );
}

export default App;
