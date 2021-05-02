import './AufrufAmZug.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGewuerfelteZahl,
  wuerfeln,
  macheZug
} from '../thunks/thunks';

const AufrufAmZug = () => {
  const gewuerfelteZahl = useSelector(state => state.gewuerfelteZahl);
  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);
  const clients = useSelector(state => state.clients);

  const istClientDran = clients.find(client => client.clientId === clientId).order === werIstDran;
  const spielerName = clients.find(client => client.order === werIstDran).spielerName;


  const dispatch = useDispatch();

  // Beim Mounten (Aufruf) des components wird gewuerfelteZahl auf 0 zurückgesetzt
  useEffect(() => dispatch(setGewuerfelteZahl(0)), [dispatch]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <section className="am-zug">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>{spielerName ? spielerName : `${werIstDran + 1}. Spieler`}, bitte einen Zug machen!</Modal.Title>
        </Modal.Header>

        <Modal.Body>{!gewuerfelteZahl ? 'Würfeln Sie 1-6' : `Sie haben ${gewuerfelteZahl} gewürfelt!`}</Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            disabled={!!gewuerfelteZahl}
            onClick={() => {
              if (istClientDran) {
                dispatch(wuerfeln(clientId, spielId));
              }
            }}
          >
            Würfeln
          </Button>

          <Button
            variant="primary"
            disabled={!gewuerfelteZahl}
            onClick={() => {
              if (istClientDran) {
                const neuePosition = spielfigurPositionen[werIstDran] + gewuerfelteZahl;
                dispatch(macheZug(clientId, spielId, neuePosition));
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