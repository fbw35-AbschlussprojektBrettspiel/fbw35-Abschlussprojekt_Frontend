import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const QuizFrage = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const frage = useSelector(state => state.frage);

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
                />
              )
            }
          </ul>
        </Modal.Body>

      </Modal>
    </section>
  );
};

export default QuizFrage;