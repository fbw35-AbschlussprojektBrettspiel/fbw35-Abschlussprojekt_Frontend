import Spielanleitung from './Spielanleitung'
import './Startseite.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  setPage,
  connectWebsocket
} from '../thunks/thunks';

const Startseite = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(connectWebsocket()), [dispatch]);

  return (
    <div className="Startseite">
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => dispatch(setPage('spielseite'))}>
        Gehe zum Spiel!
      </button>
      <Spielanleitung />
    </div>
  );
}

export default Startseite;