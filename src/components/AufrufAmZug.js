import './AufrufAmZug.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';

const AufrufAmZug = props => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  let gewuerfelt = Math.floor((Math.random() * 6) + 1)
  return (

<div className="am-zug">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>Bitte einen Zug machen! (würfle 1-6)</Modal.Title>
        </Modal.Header>

        <Modal.Body>Du hast {gewuerfelt} gewuerfelt</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => {
          const neuePosition = props.spielfigurPosition + gewuerfelt;
          props.setSpielfigurPosition(neuePosition);
          if (neuePosition >= props.spielfeldgroesse) {
            props.setPopup('ende');
          } else {
            // Später soll hier anhand der neuen Spielerposition
            // und des SpielfeldArrays ermittelt werden,
            // welches Popup folgen soll
            props.setPopup('quizfrage');
          }
        }}>gehe weiter vor</Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
};

export default AufrufAmZug;