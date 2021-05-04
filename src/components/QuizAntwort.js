import './QuizAntwort.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  verschiebeSpielfigur,
  naechsterZug
} from '../thunks/thunks';

const QuizAntwort = props => {
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const spielId = useSelector(state => state.spielId);
  const clientId = useSelector(state => state.clientId);
  const clients = useSelector(state => state.clients);

  const istClientDran = clients.find(client => client.clientId === clientId).order === werIstDran;

  const dispatch = useDispatch();

  const [AntwortKommentar, setAntwortKommentar] = useState("");

  return (
    <li
      className="quizantwort"
      onClick={() => {
        props.setTimer(false); //setzt den langen 12+3sek timer von quizfrage auf false
        if (istClientDran && !props.bereitsGeantwortet) {
          props.setGeantwortet(true);
          //all dass wird nur ausgeführt wenn noch keine Antwort abgegeben wurde
          //setzt hier also auf "true" um zu verhindern dass andere Antworten/klicks "ausgewertet werden"
          //direkt vor dem dispatch bzw. beim timeout wird wieder false gesetzt
          //-->nicht vergessen false wird erst nach den 2.5sek gesetzt(sonst etwas verwirrend)

          // Hier wird geprüft, ob die angeklickte Antwort falsch ist.
          // Dann wird die Spielfigur zurückgesetzt
          if (props.index !== props.indexRichtigeAntwort) {
            console.log("ANTWORT FALSCH abgegeben");
            setAntwortKommentar("leider falsch!! ")
            setTimeout( () =>{
              clearTimeout(props.myTimer);
              props.setGeantwortet(false);
              dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
              dispatch(naechsterZug(clientId, spielId));
            }, 2500);
            return clearTimeout(this)
          } else {
            // Antwort war richtig:
            // Es wird ein Kommentart "richtig" vor die Zeile gesetzt
            // aufruf-Modal wird (naechsterZug) angezeigt.
            console.log("ANTWORT RICHTIG abgegeben");
            setAntwortKommentar("super richtig!! ")
            const richtigeAntwortTimer = setTimeout(() => {
                clearTimeout(props.myTimer);
                props.setGeantwortet(false);
                dispatch(naechsterZug(clientId, spielId));
              }, 2500);
              return clearTimeout(this)
            }
        }
      }}
    >
      {AntwortKommentar + props.antwort}
    </li>
  );
};

export default QuizAntwort;