import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import QuizAntwort from './QuizAntwort';

const QuizFrage = props => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const zufaelligeFrage = props.fragenThema1[Math.floor(Math.random() * props.fragenThema1.length)];

  return (
    <section className="quizfrage">

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title><p>{zufaelligeFrage.frage}</p></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            {zufaelligeFrage.antworten.map((element, index) =>
              <QuizAntwort
                key={index}
                index={index}
                antwort={element}
                indexRichtigeAntwort={zufaelligeFrage.indexRichtigeAntwort}
                setPopup={props.setPopup}
                spielfigurPosition={props.spielfigurPosition}
                setSpielfigurPosition={props.setSpielfigurPosition}
                gewuerfelteZahl={props.gewuerfelteZahl}
              />
            )}
          </ul>
        </Modal.Body>

      </Modal>

    </section>
  );
};

export default QuizFrage;