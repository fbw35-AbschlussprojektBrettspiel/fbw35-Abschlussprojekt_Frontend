import Spielfeld from './Spielfeld';
import Spielfigur from './Spielfigur';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';
import Aktion from './Aktion';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'

const Spielseite = () => {
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const popup = useSelector(state => state.popup);
  const clients = useSelector(state => state.clients);

//unter :root ist in der CSS eine Variable --width für die Breite des Spielfelds gespeichert
//                                         --height für die Höhe
let width = document.querySelector(':root');
let height = document.querySelector(':root');
// 1600px/1024px ergibt 1.5625
// es wird die Volle Höhe in der CSS verwendet, Breite angepasst,
// da wir tendenziell ein Breiteres-Bildschirmverhältnis haben
// damit bleiben wir immer im selben Seitenverhältnis
// (beim Starten des Spiels, wird nicht Live/per State aktualisiert)
function setCSSRatioVars() {
  height.style.setProperty('--height', parseInt(window.innerHeight)+"px")
  width.style.setProperty('--width',   parseInt(window.innerHeight*1.5625)+"px");
}

  return (
  <div className="ausserhalbSpielseite">
    <div className="grid-container Spielseite">
      {setCSSRatioVars()}
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
          feldtyp={element}
        />
      )}

      {clients.map((element, index) =>
        <Spielfigur
          key={index}
          order={element.order}
        />
      )}

      {/* Die Funktionalität fürs Erste rausgenommen */}
      <Button
        variant="primary" className="SpielBeenden"
      // onClick={() => {
      //   dispatch(setPage('startseite'));
      // }}
      >
        Spiel beenden
      </Button>


      {
        // Das Objekt imitiert ein switch-case
        {
          aufruf: <AufrufAmZug />,
          quizfrage: <QuizFrage />,
          aktion: <Aktion />,
          ende: <SpielZuEnde />
        }[popup]
      }
    </div>
  </div>
  );
};

export default Spielseite;