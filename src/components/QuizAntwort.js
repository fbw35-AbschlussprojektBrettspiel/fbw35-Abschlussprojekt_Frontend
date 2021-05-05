import './QuizAntwort.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  verschiebeSpielfigur,
  naechsterZug,
  klickeAntwort
} from '../thunks/thunks';

const QuizAntwort = props => {
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const spielId = useSelector(state => state.spielId);
  const clientId = useSelector(state => state.clientId);
  const clients = useSelector(state => state.clients);
  const antwortFeedback = useSelector(state => state.antwortFeedback);

  const dispatch = useDispatch();

  const istClientDran = clients.find(client => client.clientId === clientId).order === werIstDran;

  const antwortKommentar = antwortFeedback[0] === props.index && antwortFeedback[1] === true ? 'Richtig! ' : antwortFeedback[0] === props.index && antwortFeedback[1] === false ? 'Falsch! ' : '';

  return (
    <li
      className="quizantwort"
      onClick={() => {
        if (istClientDran) {
          // Hier wird geprüft, ob die angeklickte Antwort falsch ist.
          // Dann wird die Spielfigur zurückgesetzt
          if (props.index !== props.indexRichtigeAntwort) {
            dispatch(klickeAntwort(clientId, spielId, props.index, false));
            dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
          } else {
            dispatch(klickeAntwort(clientId, spielId, props.index, true));
          }
          // unabhängig davon, ob die Antwort richtig oder falsch war,
          // wird als nächstes aufruf-popup angezeigt.
          // dispatch(naechsterZug(clientId, spielId));
        }
      }}
    >
      {antwortKommentar}{props.antwort}
    </li>
  );
};

export default QuizAntwort;