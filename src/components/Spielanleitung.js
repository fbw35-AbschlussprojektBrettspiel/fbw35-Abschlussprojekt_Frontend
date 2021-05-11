import './Spielanleitung.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Spielanleitung = props => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="spielanleitung">
      <Button
        variant="success"
        onClick={handleShow}
        className="float-right"
      >
        Spielanleitung
      </Button>

      <Modal className="spielanleitung-modal" show={show} onHide={handleClose}>

        <Modal.Header>
          <Modal.Title>Anleitung und Spielregeln: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faBook} size="2x" color="darkgrey" />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="spielregeln">
            <p>Vielen Spaß an unserem Quiz-Brettspiel. Es wird dir bestimmt helfen etwas zu lernen oder lang Vergessenes wieder aufzufrischen.</p>

            <h5>1. Spiel erstellen</h5>
            <p>Eröffne dein eigenes Spiel. ("Neues Spiel erstellen") Du erhälst eine Spiel-ID, die du an deine Mitspieler senden kannst.</p>
            <h5>2. Spiel starten</h5>
            <p>Du kannst als Einzelspieler für dich selbst üben oder mit deinen Freunden um den Sieg kämpfen. Gebe die Spiel-ID und optional einen Spielernamen in die Eingabefelder ein und klicke auf "Spiel beitreten". Wenn sich alle Mitspieler dem Spiel beigetreten sind, dann klickt einer auf "Spiel starten".</p>
            <h5>3. Allgemeine Regeln</h5>
            <p>Wenn du dran bist, würfelst du, wie weit deine Spielfigur voranschreitet. Wenn du auf einem Quizfeld landest, musst du versuchen, aus mehreren Antworten auf die Richtige zu klicken. Ist die Antwort richtig, bleibt deine Spielfigur stehen. Bei einer falschen Antwort reist deine Spielfigur wieder zurück.</p>
            <h5>4. Spielfelder</h5>
            <p>Die Spielfelder: Es gibt verschiedene Arten von Spielfeldern, dazu zählen vorallem die Quiz-Felder, die je nach Icon dich bereits vorher sehen lassen aus welchem Themengebiet deine Frage stammen wird. Weiter gibt es noch die Aktionsfelder, diese lassen dich vor- oder zurückgehen. Lass dich überraschen.</p>
            <h5>5. Spielende</h5>
            <p>Gewonnen hat derjenige, der als Erster über das Ziel geht. Klicke auf "Spiel beenden", um das Spiel vorzeitig zu beenden.</p>
          </div>

        </Modal.Body>

      </Modal>

    </section>
  );
}

export default Spielanleitung;