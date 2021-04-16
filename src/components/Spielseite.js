import { useState, useEffect } from 'react';
import Spielfeld from './Spielfeld';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../thunks/thunks';

const Spielseite = props => {
  const URL = 'http://localhost:3050/fragen/'
  // Spielfelder-Array.
  // Später könnte drin die Feldtypen sein, z.B. Thema1, Thema2, Aktion
  const [spielfeldArray, setSpielfeldArray] = useState(
    [null, null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null, null, null,
      null
    ]);
  // Eine Zahl, die dem Index von spielfeldArray entspricht und die Position von Spielfigur angibt.
  const [spielfigurPosition, setSpielfigurPosition] = useState(0);
  // Die Variable legt fest, welches Popup gerendert wird (außer SpielZuEnde)
  const [popup, setPopup] = useState('aufruf');
  // Die gewürfelte Zahl
  const [gewuerfelteZahl, setGewuerfelteZahl] = useState(0);
  // Fragen-Array
  const [fragenThema1, setFragenThema1] = useState([]);
  // Beim Mounten des Components wird einmalig die Fragen aus der DB geholt.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const fragenArray = response.data;
        console.log(fragenArray);
        setFragenThema1(fragenArray);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="grid-container">
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
          spielfigurPosition={spielfigurPosition}
        />
      )}

      <button className="SpielBeenden" onClick={() => {
        dispatch(setPage('startseite'));
        setSpielfigurPosition(0)
      }}>
        Spiel beenden
        </button>

      {
        // Das Objekt imitiert ein switch-case
        {
          aufruf: <AufrufAmZug
            spielfigurPosition={spielfigurPosition}
            setSpielfigurPosition={setSpielfigurPosition}
            setPopup={setPopup}
            spielfeldgroesse={spielfeldArray.length}
            setGewuerfelteZahl={setGewuerfelteZahl}
          />,
          quizfrage: <QuizFrage
            fragenThema1={fragenThema1}
            setPopup={setPopup}
            spielfigurPosition={spielfigurPosition}
            setSpielfigurPosition={setSpielfigurPosition}
            gewuerfelteZahl={gewuerfelteZahl}
          />,
          ende: <SpielZuEnde
            setPage={props.setPage}
            spielfigurPosition={spielfigurPosition}
            setSpielfigurPosition={setSpielfigurPosition}
            spielfeldgroesse={spielfeldArray.length}
            setPopup={setPopup}
          />
        }[popup]
      }
    </div>
  );
};

export default Spielseite;