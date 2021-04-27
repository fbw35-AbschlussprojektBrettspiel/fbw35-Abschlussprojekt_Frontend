import './QuizAntwort.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  verschiebeSpielfigur,
  naechsterZug
} from '../thunks/thunks';
import { useState  } from 'react';

const QuizAntwort = props => {
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const spielId = useSelector(state => state.spielId);
  const clientId = useSelector(state => state.clientId);
  const dispatch = useDispatch();

  const [AntwortKommentar, setAntwortKommentar] = useState("");

  return (
    <li
      className="quizantwort"
      onClick={() => {
        // Hier wird geprüft, ob die angeklickte Antwort falsch ist.
        // Es wird ein Kommentart "falsch" vor die Zeile gesetzt
        // Dann wird die Spielfigur zurückgesetzt
        // aufruf-Modal wird (naechsterZug) angezeigt.
        if (props.index !== props.indexRichtigeAntwort) {
          setAntwortKommentar("leider falsch!! ")
          setTimeout(() => {
            dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
            dispatch(naechsterZug(clientId, spielId));
          }, 3000);
          return clearTimeout(this)
        } else {
        // Antwort war richtig
        // Es wird ein Kommentart "richtig" vor die Zeile gesetzt
        // aufruf-Modal wird (naechsterZug) angezeigt.
          setAntwortKommentar("super richtig!! ")
          setTimeout(() => {
            dispatch(naechsterZug(clientId, spielId));
          }, 3000);
          return clearTimeout(this)
        }
      }}
    >
      {AntwortKommentar + props.antwort}
    </li>
    //im Moment können zwar mehrere Antworten angeklickt werden, aber
    //der Timer der zuerst angeklickten Antwort führt dass dispatch aus...
    //oder kürzer: nur der erste Klick zählt!
  );
};

export default QuizAntwort;