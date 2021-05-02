import Spielfeld from './Spielfeld';
import Spielfigur from './Spielfigur';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';
import QuizFrage from './QuizFrage';
import Aktion from './Aktion';
import { useSelector } from 'react-redux';

const Spielseite = () => {
  const spielfeldArray = useSelector(state => state.spielfeldArray);
  const popup = useSelector(state => state.popup);
  const clients = useSelector(state => state.clients);

//unter :root ist in der CSS eine Variable --width für die Breite des Spielfelds gespeichert
var width = document.querySelector(':root');
// 1600px/1024px ergibt 1.5625
// es wird die Volle Höhe in der CSS verwendet, Breite angepasst,
// da wir tendenziell ein Breiteres-Bildschirmverhältnis haben
// damit bleiben wir immer im selben Seitenverhältnis
function setWidthVar() {
  width.style.setProperty('--width', parseInt(window.innerHeight*1.5625)+"px");
}

  return (
    
    <div className="grid-container Spielseite">
      {setWidthVar()}
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
      <button
        className="SpielBeenden"
      // onClick={() => {
      //   dispatch(setPage('startseite'));
      // }}
      >
        Spiel beenden
      </button>


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
  );
};

export default Spielseite;