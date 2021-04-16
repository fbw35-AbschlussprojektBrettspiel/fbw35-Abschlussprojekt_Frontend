import './AufrufAmZug.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSpielfigurPosition,
  setGewuerfelteZahl,
  setPopup
} from '../thunks/thunks';

const AufrufAmZug = () => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const spielfeldArray = useSelector(state => state.spielfeldArray);

  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const gewuerfelt = Math.floor((Math.random() * 6) + 1);

  return (
    <section className="am-zug">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>Bitte einen Zug machen! (würfle 1-6)</Modal.Title>
        </Modal.Header>

        <Modal.Body>Du hast {gewuerfelt} gewuerfelt</Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              const neuePosition = spielfigurPosition + gewuerfelt;
              dispatch(setSpielfigurPosition(neuePosition));
              dispatch(setGewuerfelteZahl(gewuerfelt));
              if (neuePosition >= spielfeldArray.length) {
                dispatch(setPopup('ende'));
              } else {
                // Später soll hier anhand der neuen Spielerposition
                // und des SpielfeldArrays ermittelt werden,
                // welches Popup folgen soll
                dispatch(setPopup('quizfrage'));
              }
            }}
          >
            gehe weiter vor
          </Button>
        </Modal.Footer>

      </Modal>
    </section>
  );
};

export default AufrufAmZug;