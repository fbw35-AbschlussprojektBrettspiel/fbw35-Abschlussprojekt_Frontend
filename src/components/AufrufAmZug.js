import './AufrufAmZug.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSpielfigurPosition,
  setGewuerfelteZahl,
  setPopup,
  wuerfeln,
  macheZug
} from '../thunks/thunks';

const AufrufAmZug = () => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);

  const dispatch = useDispatch();

  useEffect(() => dispatch(setGewuerfelteZahl(0)), [dispatch]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // const gewuerfelt = Math.floor((Math.random() * 6) + 1);

  return (
    <section className="am-zug">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>Bitte einen Zug machen!</Modal.Title>
        </Modal.Header>

        <Modal.Body>{!gewuerfelteZahl ? 'Würfeln Sie 1-6' : `Sie haben ${gewuerfelteZahl} gewürfelt!`}</Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            disabled={!!gewuerfelteZahl}
            onClick={() => {
              dispatch(wuerfeln(clientId, spielId));
            }}
          >
            Würfeln
          </Button>

          <Button
            variant="primary"
            disabled={!gewuerfelteZahl}
            onClick={() => {
              const neuePosition = spielfigurPosition + gewuerfelteZahl;
              dispatch(macheZug(clientId, spielId, neuePosition));
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