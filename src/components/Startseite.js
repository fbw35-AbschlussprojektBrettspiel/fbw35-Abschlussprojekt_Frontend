import Spielanleitung from './Spielanleitung'
import './Startseite.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  connectWebsocket,
  createSpiel,
  joinSpiel,
  startSpiel
} from '../thunks/thunks';

const Startseite = () => {
  const [textInput, setTextInput] = useState('');
  const [nameTextInput, setNameTextInput] = useState('');
  const [logTextInput, setLogTextInput] = useState('')

  const dispatch = useDispatch();

  useEffect(() => dispatch(connectWebsocket()), [dispatch]);

  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);
  const startseiteLog = useSelector(state => state.startseiteLog);

  useEffect(() => setTextInput(spielId), [spielId]);
  useEffect(() => setLogTextInput(startseiteLog), [startseiteLog]);

  return (
    <section className="Startseite">
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => dispatch(createSpiel(clientId))}>
        Neues Spiel erstellen
      </button><br />
      <button onClick={() => dispatch(joinSpiel(clientId, spielId || textInput, nameTextInput))}>
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
      <input
        type="text"
        name="spieler-name"
        id="spieler-name"
        placeholder="spieler-name"
        value={nameTextInput}
        onChange={event => setNameTextInput(event.target.value)}
      /><br />
      <button onClick={() => dispatch(startSpiel(clientId, spielId))}>
        Spiel starten
      </button>
      <Spielanleitung />
      <textarea
        name="startseite-log"
        id="startseite-log"
        cols="30"
        rows="10"
        value={logTextInput}
        disabled>
      </textarea>
    </section>
  );
};

export default Startseite;