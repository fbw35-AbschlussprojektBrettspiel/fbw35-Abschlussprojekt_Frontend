import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import QuizAntwort from './QuizAntwort';

const QuizFrage = props => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <section className="quizfrage">

<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

<Modal.Header>
  <Modal.Title><p>{props.fragenThema1[0].frage}</p></Modal.Title>
</Modal.Header>

<Modal.Body>
<ul>
        {props.fragenThema1[0].antworten.map((element, index) =>
          <QuizAntwort
            key={index}
            index={index}
            antwort={element}
            indexRichtigeAntwort={props.fragenThema1[0].indexRichtigeAntwort}
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