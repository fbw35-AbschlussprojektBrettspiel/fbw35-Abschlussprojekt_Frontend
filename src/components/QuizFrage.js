import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector } from 'react-redux';

const QuizFrage = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const fragen = useSelector(state => state.fragen);
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const spielfeldArray = useSelector(state => state.spielfeldArray);

  // Thema anhand der Spielfigurposition ermitteln
  const thema = spielfeldArray[spielfigurPosition];

  const fragenEinesThemas = fragen.filter(element => element.thema === thema);

  const zufaelligeFrage = fragenEinesThemas[Math.floor(Math.random() * fragenEinesThemas.length)];

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
              />
            )}
          </ul>
        </Modal.Body>

      </Modal>

    </section>
  );
};

export default QuizFrage;