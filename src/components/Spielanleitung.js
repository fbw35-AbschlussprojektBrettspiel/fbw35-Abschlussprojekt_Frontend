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
<li>allgemeine Regeln</li>
<li>Felder des Spielfelds</li>
<li>Registrieren und der Beste werden</li>
<li>Spielen als Gast</li>
</ol>

<b>1.</b><br></br>
<p>
Eröffne dein eigenes Spielfeld. ("Neues Spiel erstellen")
Du erhälst eine Spiel-ID.
Du kannst deinen Namen in das Feld ("Spielername") einfügen.
</p>
<b>2.</b><br></br>
<p>
 Es sind mehrere Spielvarianten möglich, du kannst als Einzelspieler
für dich selbst üben, oder mit deinen Freunden um den Sieg kämpfen.
Sende den Homepagelink und Spiel-ID an deine Freunde.
Warte in dem Fall bis sich alle Mitspieler angemeldet haben und klicke
dann "Spiel starten".
</p>
<b>3.</b><br></br>
<p>
Du würfelst, wie weit deine Spielfigur voranschreitet.
Ist die Antwort gegeben, kann der nächste Wurf des Würfels starten. 
Entweder deiner, oder der des nächsten Mitspielers.
Ist die Antwort richtig, bleibt deine Spielfigur stehen.
Bei einer falschen Antwort reist deine Spielfigur wieder
zurück, auf das Feld von dem du gekommen bist.
</p>
<b>4.</b><br></br>
<p>
Die unterschiedlichen Spielfelder:
Es gibt verschiedene Arten von Spielfeldern,
dazu zählen vorallem die Quiz-Felder die je nach Bild
dich bereits vorher sehen lassen zu welchem Themengebiet
deine Frage gehören wird.
Weiter gibt es jedoch noch die Aktionsfelder, diese endscheiden ob
du weiter vor darfst oder zurück musst
und noch mehr. Lass dich überraschen.
</p>
<b>5.</b><br></br>
<p>
jeder der Lernen und etwas Spass haben möchte kann natürlich mitmachen,
in dem Fall wird für dich ein Benutzername (oder "_Spieler") angefügt, um
keine Verwechslungen zu schaffen. Spaß macht es auch so.
</p>
<b>6.</b><br></br>
<p>
Gewonnen hat derjenige, der als Erster über das Ziel geht.
</p>
          </Modal.Body>
  
        </Modal>
  
      </div>
    );
  }
  
  export default Spielanleitung;