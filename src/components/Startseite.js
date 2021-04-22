import Spielanleitung from './Spielanleitung'
import './Startseite.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  setPage,
  connectWebsocket,
  createSpiel
} from '../thunks/thunks';

const Startseite = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(connectWebsocket()), [dispatch]);

  const clientId = useSelector(state => state.clientId);

  return (
    <div className="Startseite">
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => dispatch(setPage('spielseite'))}>
        Gehe zum Spiel!
      </button>
      <button onClick={() => dispatch(createSpiel(clientId))}>
        Neues Spiel erstellen
      </button>
      <Spielanleitung />
    </div>
  );
}

export default Startseite;