import './AufrufAmZug.css';

const AufrufAmZug = props => {
  let gewuerfelt = Math.floor((Math.random() * 6) + 1)
  return (
    <section className="am-zug">
      <p>Bitte einen Zug machen! (würfle 1-6)</p>
      <button
        onClick={() => {
          const neuePosition = props.spielfigurPosition + gewuerfelt;
          props.setSpielfigurPosition(neuePosition);
          props.setGewuerfelteZahl(gewuerfelt);
          if (neuePosition >= props.spielfeldgroesse) {
            props.setPopup('ende');
          } else {
            // Später soll hier anhand der neuen Spielerposition
            // und des SpielfeldArrays ermittelt werden,
            // welches Popup folgen soll
            props.setPopup('quizfrage');
          }
        }}
      >
        gehe {gewuerfelt} Felder vor
      </button>
      <p>du hast {gewuerfelt} gewuerfelt</p>
    </section>
  );
};

export default AufrufAmZug;