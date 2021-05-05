import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizFrage.css';
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {
  naechsterZug,
  setAntwortFeedback
} from '../thunks/thunks';

const QuizFrage = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const clientId = useSelector(state => state.clientId);
  const spielId = useSelector(state => state.spielId);
  const frage = useSelector(state => state.frage);
  const antwortFeedback = useSelector(state => state.antwortFeedback);
  const clients = useSelector(state => state.clients);
  const werIstDran = useSelector(state => state.werIstDran);
  const dispatch = useDispatch();

  // Beim Mounten des components wird antwortFeedback auf [] zurückgesetzt.
  useEffect(() => dispatch(setAntwortFeedback([])), [dispatch]);

  const istClientDran = clients.find(client => client.clientId === clientId).order === werIstDran;

  const istBeantwortet = antwortFeedback.length > 0;

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

        <Modal.Body>
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

        <Modal.Footer>
          <Button
            variant="primary"
            disabled={!istBeantwortet}
            onClick={() => {
              if (istClientDran) {
                dispatch(naechsterZug(clientId, spielId));
              }
            }}
          >
            Weiter
          </Button>
        </Modal.Footer>

      </Modal>
    </section>
  );
};

export default QuizFrage;