import { useEffect } from 'react';
import Spielfeld from './Spielfeld';
import Spielfigur from './Spielfigur';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';
import Aktion from './Aktion';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPage,
  fetchFragen,
  setSpielfigurPosition,
  setSpielfigurPositionen
} from '../thunks/thunks';

const Spielseite = () => {
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const popup = useSelector(state => state.popup);
  const clients = useSelector(state => state.clients);

  const dispatch = useDispatch();

  // Hier werden die Fragen einmalig beim Mounten des components geholt.
  // useEffect(() => dispatch(fetchFragen()), [dispatch]);

  // spielfigurPositionen werden einmalig beim Mounten des components auf 0 gesetzt.
  // useEffect(() => {
  //   const initialPositionen = {};
  //   clients.forEach(client => initialPositionen[client.order] = 0);
  //   dispatch(setSpielfigurPositionen(initialPositionen), [dispatch]);
  // });

  return (
    <div className="grid-container">
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
          feldtyp={element}
        />
      )}

      {clients.map((element, index) =>
        <Spielfigur
          key={index}
          order={element.order}
        />
      )}

      <button
        className="SpielBeenden"
        onClick={() => {
          dispatch(setPage('startseite'));
        }}
      >
        Spiel beenden
      </button>

      {
        // Das Objekt imitiert ein switch-case
        {
          aufruf: <AufrufAmZug />,
          quizfrage: <QuizFrage />,
          aktion: <Aktion />,
          ende: <SpielZuEnde />
        }[popup]
      }
    </div>
  );
};

export default Spielseite;