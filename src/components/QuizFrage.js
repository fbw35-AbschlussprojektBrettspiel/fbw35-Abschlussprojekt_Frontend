import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector, useDispatch } from 'react-redux';
import { verschiebeSpielfigur, naechsterZug } from '../thunks/thunks';

const QuizFrage = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const frage = useSelector(state => state.frage);

  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);
  const dispatch = useDispatch();

  const [ModalHeaderInhalt, setModalHeaderInhalt] = useState(frage.frage);

  /* nach 15 Sekunden verschwindet die Frage von selbst,
  Antwort wird als falsch gewertet! --Spielfigur zieht zurück */
  useEffect(() => {
    const QuizFrageTimer = setTimeout(() => {
      console.log("ich habe 10 sek gewartet...du musst zurück");
      setModalHeaderInhalt("in 3 Sekunden ist die Zeit vorbei!!");
      setTimeout(() => {
        dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] - gewuerfelteZahl));
        dispatch(naechsterZug(clientId, spielId));
      }, 3000);
    }, 12000);
    return () => {
      clearTimeout(QuizFrageTimer);
    };
  },
    [clientId, dispatch, gewuerfelteZahl, spielId, spielfigurPositionen, werIstDran]
  );

  return (<section className="quizfrage" >

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header>
        <Modal.Title> < p > {ModalHeaderInhalt} </p></Modal.Title >
      </Modal.Header>
      <Modal.Body >
        <ul>
          {
            frage.antworten.map((element, index) =>
              <QuizAntwort key={index}
                index={index}
                antwort={element}
                indexRichtigeAntwort={frage.indexRichtigeAntwort}
              />
            )
          } </ul>
      </Modal.Body>
    </Modal>
  </section>
  );
};

export default QuizFrage;