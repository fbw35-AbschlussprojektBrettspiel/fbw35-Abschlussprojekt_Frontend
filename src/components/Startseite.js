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

//unter :root ist in der CSS eine Variable --width für die Breite des Spielfelds gespeichert
//                                         --height für die Höhe
let width = document.querySelector(':root');
let height = document.querySelector(':root');
// 1600px/1024px ergibt 1.5625
// es wird die Volle Höhe in der CSS verwendet, Breite angepasst,
// da wir tendenziell ein Breiteres-Bildschirmverhältnis haben
// damit bleiben wir immer im selben Seitenverhältnis
// (beim Starten des Spiels, wird nicht Live/per State aktualisiert)
function setCSSRatioVars() {
  height.style.setProperty('--height', parseInt(window.innerHeight)+"px")
  width.style.setProperty('--width',   parseInt(window.innerHeight*1.5625)+"px");
}

  return (
  <div className="ausserhalbStartseite">
    <section className="Startseite">
      {setCSSRatioVars()}
      <h1>Willkommen auf die Startseite!</h1>
      <Button variant="primary" className="StartseiteButtons" onClick={() => dispatch(createSpiel(clientId))}>
        Neues Spiel erstellen
      </Button><br />
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
  </div>
  );
};

export default Startseite;