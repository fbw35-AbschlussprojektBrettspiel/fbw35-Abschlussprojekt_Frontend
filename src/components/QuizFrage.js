import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {
  verschiebeSpielfigur,
  naechsterZug
} from '../thunks/thunks';

const QuizFrage = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const frage = useSelector(state => state.frage);
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const spielId = useSelector(state => state.spielId);
  const clientId = useSelector(state => state.clientId);
  const clients = useSelector(state => state.clients);

  const dispatch = useDispatch();

  const [myTimer, setTimer] = useState(false);
  const [ModalFooterInhalt, setModalFooterInhalt] = useState("bald bin ich eine ProgressBar :)");
  const [bereitsGeantwortet, setGeantwortet] = useState(false);

/* nach 15 Sekunden verschwindet die Frage von selbst,
Antwort wird als falsch gewertet! --Spielfigur zieht zurück */
    useEffect(() => {
        const myTimer = setTimeout(() => {
          setTimer(true)
          // console.log("ich habe 10 sek gewartet...du musst zurück")
          setModalFooterInhalt("in 3 Sekunden ist die Zeit vorbei!!")
          //später kommt in den Footer die ProgressBar
          const innerTimer = setTimeout(() => {
            dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
            dispatch(naechsterZug(clientId, spielId));
            clearTimeout(myTimer);
            clearTimeout(innerTimer);
          }, 3000);
          return () => {
            clearTimeout(myTimer);
            clearTimeout(innerTimer);
          }
        }, 12000);
        return () => {
          clearTimeout(myTimer);
        };
      },
       [clientId, dispatch, gewuerfelteZahl, spielId, spielfigurPositionen, werIstDran]
    );

  return (
    <section className="quizfrage">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      {/* &nbsp; ist die Abkürzung/Lösung um ein Leerzeichen in HTML-Text einzufügen */}
        <Modal.Header>
          <Modal.Title><p>{frage.frage} &nbsp;&nbsp;&nbsp;          
                          <FontAwesomeIcon icon={faQuestionCircle} transform="grow-8"
                          style={{ color: "darkgrey" }} />
                        </p></Modal.Title >
        </Modal.Header>

        <Modal.Body >
          <ul>
            {
              frage.antworten.map((element, index) =>
                <QuizAntwort key={index}
                  index={index}
                  antwort={element}
                  indexRichtigeAntwort={frage.indexRichtigeAntwort}
                  myTimer={myTimer}
                  setTimer={setTimer}
                  bereitsGeantwortet={bereitsGeantwortet}
                  setGeantwortet={setGeantwortet}
                />
              )
            }
          </ul>
        </Modal.Body>

        <Modal.Footer>
        {ModalFooterInhalt}
        </Modal.Footer>

      </Modal>
    </section>
  );
};

export default QuizFrage;