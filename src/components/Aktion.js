import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  verschiebeSpielfigur,
  naechsterZug
} from '../thunks/thunks';

const Aktion = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const aktion = useSelector(state => state.aktion);
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const spielId = useSelector(state => state.spielId);
  const clientId = useSelector(state => state.clientId);
  const dispatch = useDispatch();

  return (
    <section className="aktion">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>

          <Modal.Title>
            <p>{aktion.beschreibung}</p>
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(verschiebeSpielfigur(clientId, spielId, spielfigurPositionen[werIstDran] + aktion.positionsAenderung));
              dispatch(naechsterZug(clientId, spielId));
            }}
          >
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Aktion;