import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';

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
            <Modal.Title>Einleitung und Spielregeln:</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
<p>Vielen dank und Spaß an unserem Quiz-Game,
es wird euch bestimmt helfen etwas zu lernen oder lange vergessenes
wieder aufzufrischen.</p>

<ol>
<li>Spiel starten</li>
<li>bestimmen der Spielvariante</li>
<li>allgemeine Regeln</li>
<li>Felder des Spielfelds</li>
<li>registrieren und der beste werden</li>
<li>spielen als Gast</li>
</ol>

<b>1.</b><br></br>
<p>
Eröffnet euer eigenes Spielfeld, wählt dazu aus zu welchen
Technologien Ihr Fragen erhalten möchtet und wie groß das Spielfeld sein soll.
</p>
<b>2.</b><br></br>
<p>
 Es sind mehrere Spielvarianten möglich, ihr könnt als Einzelspieler
für euch selbst üben, oder mit euren Freunden um den Sieg kämpfen.
Wartet in dem Fall bis alle sich zu eurem Spiel angemeldet haben und klickt
dann Spiel starten.
</p>
<b>3.</b><br></br>
<p>
Ihr würfelt, wie weit eure Spielfigur voranschreitet
Für eine Quiz-Frage bekommt Ihr 15 Sekunden Zeit,
umso schneller Ihr diese beantwortet desto mehr Punkte gibt es.
Bei einer falschen Antwort reist eure Spielfigur jedoch wieder
zurück auf das Feld von dem Ihr gekommen seid.
</p>
<b>4.</b><br></br>
<p>
Die unterschiedlichen Spielfelder:
Es gibt verschiedene Arten von Spielfeldern,
dazu zählen vorallem die Quiz-Felder die je nach Bild
euch bereits vorher sehen lassen zu welchem Themengebiet
eure Frage gehören wird.
Weiter gibt es jedoch noch die Aktionsfelder, vielleicht müsst Ihr zwei Fragen
beantworten, habt zwei zur Auswahl, dürft weiter vor oder müsst zurück
und noch mehr. Lasst euch überraschen.
</p>
<b>5.</b><br></br>
<p>
Wenn ihr nicht als Gast spielt wird euer Highscore sowie das Verhälntis an
richtig beantworteten Fragen gespeichert, und ihr könnt der beste werden!
</p>
<b>6.</b><br></br>
<p>
jeder der lernen und etwas Spass haben möchte kann natürlich mitmachen,
in dem Fall wird für euren Benutzernamen jedoch "guest_" angefügt, um
keine Verwechslungen zu schaffen. Spaß macht es aber sogar so.
</p>
          </Modal.Body>
  
        </Modal>
  
      </div>
    );
  }
  
  export default Spielanleitung;