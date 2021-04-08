import { useState } from 'react';
import Spielfeld from './Spielfeld';
import './Spielseite.css';

const Spielseite = props => {
  // Spielfelder-Array.
  // Später könnte drin die Feldtypen sein, z.B. Thema1, Thema2, Aktion
  const [spielfeldArray, setSpielfeldArray] = useState([null, null, null, null, null, null, null, null, null, null, null, null]);

  return (
    <div className="grid-container">
      {spielfeldArray.map((element, index) =>
        <Spielfeld
          key={index}
          order={index}
        />
      )}


      <h1>Lasst uns Spielen!</h1>
      <button onClick={() => props.setPage('startseite')}>
        Gehe zurück zum Start!
      </button>
    </div>
  );
};

export default Spielseite;