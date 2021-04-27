import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector, useDispatch } from 'react-redux';
import { verschiebeSpielfigur, naechsterZug} from '../thunks/thunks';

const QuizFrage = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const frage = useSelector(state => state.frage);

    const spielfigurPosition = useSelector(state => state.spielfigurPosition);
    const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
    const clientId = useSelector(state => state.clientId);
    const spielId = useSelector(state => state.spielId);
    const dispatch = useDispatch();

    const [ModalHeaderInhalt, setModalHeaderInhalt] = useState(frage.frage);
    const [QuizTFrageTimer, setTimer] = useState(false);

    /* nach 15 Sekunden verschwindet die Frage von selbst,
  Antwort wird als falsch gewertet! --Spielfigur zieht zurück */
      useEffect(() => {
          let QuizFrageTimer = setTimeout(() => {
            setTimer(true)
            console.log("ich habe 10 sek gewartet...du musst zurück")
            setModalHeaderInhalt("sorry! Zeit ist abgelaufen :(")
            setTimeout(() => {
              dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPosition - gewuerfelteZahl));
              dispatch(naechsterZug(clientId, spielId));
            }, 2000);
          }, 10000);
          return () => {
            clearTimeout(QuizFrageTimer);
          };
        },
        []
      );

      return ( <section className = "quizfrage" >

        <Modal show = {show} onHide = {handleClose} backdrop = "static" keyboard = {false} centered>
        <Modal.Header>
        <Modal.Title> < p > {ModalHeaderInhalt} </p></Modal.Title >
        </Modal.Header>
        <Modal.Body > 
          <ul> 
          {
            frage.antworten.map((element, index) =>
              <QuizAntwort key = {index}
              index = {index}
              antwort = {element}
              indexRichtigeAntwort = {frage.indexRichtigeAntwort}
              />
            )
          } </ul> 
        </Modal.Body>
        </Modal>
        </section>
      );
    };

    export default QuizFrage;