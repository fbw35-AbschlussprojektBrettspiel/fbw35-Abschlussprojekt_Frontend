import './QuizFrage.css';
import './AufrufAmZug.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  <Modal.Title><p>{props.fragenThema1[0].thema}</p></Modal.Title>
</Modal.Header>

<Modal.Body>
<ul>
  {props.fragenThema1[0].antworten.map((element, index) =>
  <QuizAntwort
  key={index}
  antwort={element}
  setPopup={props.setPopup}
  />
  )}
</ul>
</Modal.Body>

</Modal>

    </section>
  );
};

export default QuizFrage;