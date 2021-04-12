import { useState } from 'react';
import Spielfeld from './Spielfeld';
import './Spielseite.css';
import AufrufAmZug from './AufrufAmZug';
import SpielZuEnde from './SpielZuEnde';

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

      {spielfigurPosition < spielfeldArray.length ?
        <AufrufAmZug
          spielfigurPosition={spielfigurPosition}
          setSpielfigurPosition={setSpielfigurPosition}
        /> :
        <SpielZuEnde
          setPage={props.setPage}
          spielfigurPosition={spielfigurPosition}
          setSpielfigurPosition={setSpielfigurPosition}
          spielfeldgroesse={spielfeldArray.length}
        />
      }
    </div>
  );
};

export default Spielseite;