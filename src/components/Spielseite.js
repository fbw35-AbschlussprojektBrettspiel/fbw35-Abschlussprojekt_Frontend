import { useEffect } from 'react';
import Spielfeld from './Spielfeld';
import Spielfigur from './Spielfigur';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPage,
  fetchFragen,
  setSpielfigurPosition
} from '../thunks/thunks';

const Spielseite = () => {
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const popup = useSelector(state => state.popup);

  const dispatch = useDispatch();

  // Hier werden die Fragen einmalig beim Mounten des components geholt.
  useEffect(() => dispatch(fetchFragen()), [dispatch]);

  return (
    <div className="grid-container">
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
          feldtyp={element}
        />
      )}

      <Spielfigur />

      <button
        className="SpielBeenden"
        onClick={() => {
          dispatch(setPage('startseite'));
          dispatch(setSpielfigurPosition(0));
        }}
      >
        Spiel beenden
      </button>

      {
        // Das Objekt imitiert ein switch-case
        {
          aufruf: <AufrufAmZug />,
          quizfrage: <QuizFrage />,
          ende: <SpielZuEnde />
        }[popup]
      }
    </div>
  );
};

export default Spielseite;