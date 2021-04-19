import './QuizAntwort.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSpielfigurPosition,
  setPopup
} from '../thunks/thunks';

const QuizAntwort = props => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const dispatch = useDispatch();

  return (
    <li
      className="quizantwort"
      onClick={() => {
        // Hier wird geprüft, ob die angeklickte Antwort falsch ist.
        // Dann wird die Spielfigur zurückgesetzt
        if (props.index !== props.indexRichtigeAntwort) {
          dispatch(setSpielfigurPosition(spielfigurPosition - gewuerfelteZahl));
        }
        // unabhängig davon, ob die Antwort richtig oder falsch war,
        // wird als nächstes aufruf-popup angezeigt.
        dispatch(setPopup('aufruf'));
      }}
    >
      {props.antwort}
    </li>
  );
};

export default QuizAntwort;