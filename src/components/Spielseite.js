import { useState } from 'react';
import Spielfeld from './Spielfeld';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';

const Spielseite = props => {
  // Spielfelder-Array.
  // Später könnte drin die Feldtypen sein, z.B. Thema1, Thema2, Aktion
  const [spielfeldArray, setSpielfeldArray] = useState([null, null, null, null, null, null, null, null, null, null, null, null]);
  // Eine Zahl, die dem Index von spielfeldArray entspricht und die Position von Spielfigur angibt.
  const [spielfigurPosition, setSpielfigurPosition] = useState(0);

  return (
    <div className="grid-container">
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
          spielfigurPosition={spielfigurPosition}
        />
      )}

      <AufrufAmZug
        spielfigurPosition={spielfigurPosition}
        setSpielfigurPosition={setSpielfigurPosition}
      />

      {/* <h1>Lasst uns Spielen!</h1>
      <button onClick={() => props.setPage('startseite')}>
        Gehe zurück zum Start!
      </button> */}
    </div>
  );
};

export default Spielseite;