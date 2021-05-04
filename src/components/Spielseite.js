import Spielfeld from './Spielfeld';
import Spielfigur from './Spielfigur';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';
import Aktion from './Aktion';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'bootstrap';
import { beendeSpiel } from '../thunks/thunks';

const Spielseite = () => {
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const popup = useSelector(state => state.popup);
  const clients = useSelector(state => state.clients);
  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);

  const dispatch = useDispatch();

  return (
    <div className="grid-container Spielseite">
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

      <Button
        variant="primary"
        className="SpielBeenden"
        onClick={() => {
          dispatch(beendeSpiel(clientId, spielId));
        }}
      >
        Spiel beenden (für alle!)
      </Button>

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