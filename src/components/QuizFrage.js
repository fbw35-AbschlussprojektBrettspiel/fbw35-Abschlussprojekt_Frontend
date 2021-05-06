import './QuizFrage.css';
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import QuizAntwort from './QuizAntwort';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
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

  let iconColor="";
  let iconBorder="";

  switch (frage.thema) {
    case "html":
      iconColor = "red"
      iconBorder="3px darkred solid"
      break;
    case "css":
      iconColor = "blue"
      iconBorder="3px darkblue solid"
      break;
    case "javascript":
      iconColor = "orange"
      iconBorder="3px rgb(255, 81, 0) solid"
      break;
    default:
      iconColor = "grey";
      iconBorder=""
      break;
  }

  return (
    <section className="quizfrage">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        {/* &nbsp; ist die Abkürzung/Lösung um ein Leerzeichen in HTML-Text einzufügen */}
        <Modal.Header>
          <Modal.Title className="ModalTitle">

          <span className="fa-layers fa-fw quizIcon">
            <FontAwesomeIcon icon={faCircle}
            style={{ color: iconColor, backgroundColor:"white", borderRadius:"100%", border: iconBorder }} />
            <FontAwesomeIcon 
            icon={frage.thema === "html" ? faFileCode: 
                    frage.thema === "css" ? faCss3 :
                      frage.thema === "javascript" ? faJs : faQuestionCircle} 
            inverse transform="shrink-6" />
          </span>
            <p>{frage.frage}</p>
          </Modal.Title >
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