import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Spielanleitung = props => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div div class="spielanleitung">
        <Button variant="primary" className="StartseiteButtons" onClick={handleShow}>
         Spielanleitung
        </Button>
  
        <Modal show={show} onHide={handleClose}>
  
          <Modal.Header>
            <Modal.Title>Einleitung und Spielregeln: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faBook} transform="grow-8" style={{ color: "darkgrey" }} />
            </Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
<p>Vielen Dank und Spaß an unserem Quiz-Game,
es wird dir bestimmt helfen etwas zu lernen oder lange vergessenes
wieder aufzufrischen.</p>

<ol>
<li>Spiel starten</li>
<li>bestimmen der Spielvariante</li>
<li>allgemeine Regeln</li>
<li>Felder des Spielfelds</li>
<li>registrieren und der beste werden</li>
<li>Spielen als Gast</li>
</ol>

<b>1.</b><br></br>
<p>
Eröffne dein eigenes Spielfeld, wählt dazu aus zu welchen
Technologien Du Fragen erhalten möchtet und wie groß das Spielfeld sein soll.
</p>
<b>2.</b><br></br>
<p>
 Es sind mehrere Spielvarianten möglich, du kannst als Einzelspieler
für dich selbst üben, oder mit deinen Freunden um den Sieg kämpfen.
Wartet in dem Fall bis sich alle  Mitspieler angemeldet haben und klickt
dann "Spiel starten".
</p>
<b>3.</b><br></br>
<p>
Du würfelst, wie weit deine Spielfigur voranschreitet
Für eine Quiz-Frage bekommst du 15 Sekunden Zeit,
Ist die Antwort richtig, starte der nächste Wurf des Würfels. 
Entweder deiner, oder der des nächsten Mitspielers.
Bei einer falschen Antwort reist es deine Spielfigur jedoch wieder
zurück, auf das Feld von dem du gekommen seid.
</p>
<b>4.</b><br></br>
<p>
Die unterschiedlichen Spielfelder:
Es gibt verschiedene Arten von Spielfeldern,
dazu zählen vorallem die Quiz-Felder die je nach Bild
dich bereits vorher sehen lassen zu welchem Themengebiet
deine Frage gehören wird.
Weiter gibt es jedoch noch die Aktionsfelder, vielleicht musst du zwei Fragen
beantworten, hast zwei zur Auswahl, darfst weiter vor oder musst zurück
und noch mehr. Lass dich überraschen.
</p>
<b>5.</b><br></br>
<p>
Wenn du nicht als Gast spielst wird dein Highscore sowie das Verhälntis an
richtig beantworteten Fragen gespeichert, und du kannst der Beste werden!
</p>
<b>6.</b><br></br>
<p>
jeder der lernen und etwas Spass haben möchte kann natürlich mitmachen,
in dem Fall wird für dich ein Benutzername jedoch "guest_" angefügt, um
keine Verwechslungen zu schaffen. Spaß macht es aber sogar so.
</p>
          </Modal.Body>
  
        </Modal>
  
      </div>
    );
  }
  
  export default Spielanleitung;