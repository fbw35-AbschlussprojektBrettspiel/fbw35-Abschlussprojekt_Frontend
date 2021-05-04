import './SpielZuEnde.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { beendeSpiel } from '../thunks/thunks';

const SpielZuEnde = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);
  const dispatch = useDispatch();
  const werIstDran = useSelector(state => state.werIstDran);
  const clients = useSelector(state => state.clients);

  const spielerName = clients.find(client => client.order === werIstDran).spielerName;

  return (
    <section className="zu-ende">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>Herzlichen Glückwunsch!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>{spielerName ? spielerName : `${werIstDran + 1}. Spieler`} hat das Ziel erreicht, Gratulation!</Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(beendeSpiel(clientId, spielId));
            }}
          >
            Zurück zur Startseite
          </Button>
        </Modal.Footer>

      </Modal>
    </section>
  );
};

export default SpielZuEnde;