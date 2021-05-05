import './QuizAntwort.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  verschiebeSpielfigur,
  klickeAntwort
} from '../thunks/thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

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

  const istBeantwortet = antwortFeedback.length > 0;

  const antwortKommentar = antwortFeedback[0] === props.index && antwortFeedback[1] === true ? <FontAwesomeIcon icon={faCheck} color="green"/> :
    antwortFeedback[0] === props.index && antwortFeedback[1] === false ? <FontAwesomeIcon icon={faTimes} color="red"/> :
    '';

  return (
    <li
      className="quizantwort"
      onClick={() => {
        if (istClientDran && !istBeantwortet) {
          // Wenn die angeklickte Antwort falsch ist,
          // wird die Spielfigur zurückgesetzt
          if (props.index !== props.indexRichtigeAntwort) {
            dispatch(klickeAntwort(clientId, spielId, props.index, false));
            dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
          } else {
            dispatch(klickeAntwort(clientId, spielId, props.index, true));
          }
        }
      }}
    >
      {antwortKommentar}{props.antwort}
    </li>
  );
};

export default QuizAntwort;