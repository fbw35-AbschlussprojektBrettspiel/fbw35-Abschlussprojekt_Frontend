import './SpielZuEnde.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPage,
  setPopup,
  setSpielfigurPosition
} from '../thunks/thunks';

const SpielZuEnde = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const dispatch = useDispatch();

  return (

    <section className="zu-ende">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>Herzlichen Glückwunsch!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>Du hast die Runde beendet, möchtest du auf diesem Spielfeld weiter üben?</Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(setSpielfigurPosition(spielfigurPosition - spielfeldArray.length));
              dispatch(setPopup('aufruf'));
            }}
          >
            Weiterspielen
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              dispatch(setPage('startseite'));
              dispatch(setSpielfigurPosition(0));
            }}
          >
            Zurück zur Startseite
          </Button>
        </Modal.Footer>

      </Modal>
    </section>
  )
}

export default SpielZuEnde;