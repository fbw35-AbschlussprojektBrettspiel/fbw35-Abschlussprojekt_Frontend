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
import { Button } from 'react-bootstrap'

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
      <h1>WebDev das Onlinebrettspiel</h1>
      <p>Möchtest du ein neues Spiel erstellen? Dann erstelle es hier</p>
      <Button variant="primary" className="StartseiteButtons" onClick={() => dispatch(createSpiel(clientId))}>
        Neues Spiel erstellen
      </Button><br />
      <p>Und trete dem Spiel bei</p>
      <p>Oder möchtest du einem von deinen Freunden erstellten Spiel beitreten? Dann trage die Spiel-ID ein und trete dem Spiel bei</p>
      <Button variant="primary" className="StartseiteButtons" onClick={() => dispatch(joinSpiel(clientId, spielId || textInput, nameTextInput))}>
        Spiel beitreten
      </Button>
      <input
        type="text"
        name="spiel-id"
        id="spiel-id"
        placeholder="Spiel-ID"
        value={textInput}
        onChange={event => setTextInput(event.target.value)}
      />
      <input
        type="text"
        name="spieler-name"
        id="spieler-name"
        placeholder="Spielername (optional)"
        value={nameTextInput}
        onChange={event => setNameTextInput(event.target.value)}
      /><br />
      <p>Sind alle Mitspieler dem Spiel beigetreten? Dann lasst uns das Spiel starten!</p>
      <Button variant="primary" className="StartseiteButtons" onClick={() => dispatch(startSpiel(clientId, spielId))}>
        Spiel starten
      </Button>
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