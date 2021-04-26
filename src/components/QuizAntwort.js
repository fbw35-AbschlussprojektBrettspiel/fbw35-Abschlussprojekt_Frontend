import './QuizAntwort.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSpielfigurPosition,
  setPopup,
  verschiebeSpielfigur,
  naechsterZug
} from '../thunks/thunks';

const QuizAntwort = props => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const spielId = useSelector(state => state.spielId);
  const clientId = useSelector(state => state.clientId);
  const dispatch = useDispatch();

  return (
    <li
      className="quizantwort"
      onClick={() => {
        // Hier wird geprüft, ob die angeklickte Antwort falsch ist.
        // Dann wird die Spielfigur zurückgesetzt
        if (props.index !== props.indexRichtigeAntwort) {
          dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
        }
        // unabhängig davon, ob die Antwort richtig oder falsch war,
        // wird als nächstes aufruf-popup angezeigt.
        dispatch(naechsterZug(clientId, spielId));
      }}
    >
      {props.antwort}
    </li>
  );
};

export default QuizAntwort;