import Spielanleitung from './Spielanleitung'
import './Startseite.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  setPage,
  connectWebsocket,
  createSpiel,
  joinSpiel
} from '../thunks/thunks';

const Startseite = () => {
  const [textInput, setTextInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => dispatch(connectWebsocket()), [dispatch]);

  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);

  return (
    <div className="Startseite">
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => dispatch(setPage('spielseite'))}>
        Gehe zum Spiel!
      </button><br/>
      <button onClick={() => dispatch(createSpiel(clientId))}>
        Neues Spiel erstellen
      </button><br/>
      <button onClick={() => dispatch(joinSpiel(clientId, spielId || textInput))}>
        Spiel beitreten
      </button>
      <input
        type="text"
        name="spiel-id"
        id="spiel-id"
        placeholder="spiel-id"
        value={textInput}
        onChange={event => setTextInput(event.target.value)}
      />
      <Spielanleitung />
    </div>
  );
}

export default Startseite;