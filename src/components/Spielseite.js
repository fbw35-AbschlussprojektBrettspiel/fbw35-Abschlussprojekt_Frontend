import { useState } from 'react';
import Spielfeld from './Spielfeld';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';

const Spielseite = props => {
  // Spielfelder-Array.
  // Später könnte drin die Feldtypen sein, z.B. Thema1, Thema2, Aktion
  const [spielfeldArray, setSpielfeldArray] = useState([null, null, null, null, null, null, null, null, null, null, null, null]);
  // Eine Zahl, die dem Index von spielfeldArray entspricht und die Position von Spielfigur angibt.
  const [spielfigurPosition, setSpielfigurPosition] = useState(0);
  // Die Variable legt fest, welches Popup gerendert wird (außer SpielZuEnde)
  const [popup, setPopup] = useState('aufruf');
  // Die gewürfelte Zahl
  const [gewuerfelteZahl, setGewuerfelteZahl] = useState(0);
  // Später sollen die Fragen beim erstmaligen Rendern aus der DB geholt werden
  const [fragenThema1, setfragenThema1] = useState(
    [
      {
        thema: "thema1",
        frage: "frage 1",
        antworten: [
          "antwort0 richtig",
          "antwort1 falsch",
          "antwort2 falsch",
          "antwort3 falsch"
        ],
        indexRichtigeAntwort: 0
      },
      {
        thema: "thema1",
        frage: "frage 2",
        antworten: [
          "antwort0 richtig",
          "antwort1 falsch",
          "antwort2 falsch",
          "antwort3 falsch"
        ],
        indexRichtigeAntwort: 0
      },
      {
        thema: "thema1",
        frage: "frage 3",
        antworten: [
          "antwort0 richtig",
          "antwort1 falsch",
          "antwort2 falsch",
          "antwort3 falsch"
        ],
        indexRichtigeAntwort: 0
      },
    ]
  );

  return (
    <div className="grid-container">
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
          spielfigurPosition={spielfigurPosition}
        />
      )}

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