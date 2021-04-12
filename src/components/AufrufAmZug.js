import './AufrufAmZug.css';

const AufrufAmZug = props => {
  let gewuerfelt = Math.floor((Math.random() * 6) + 1)
  return (
    <section className="am-zug">
      <p>Bitte einen Zug machen! (würfle 1-6)</p>
      <button
        onClick={() => props.setSpielfigurPosition(props.spielfigurPosition + gewuerfelt )}
      >
        gehe {gewuerfelt} Felder vor
      </button>
      <p>du hast {gewuerfelt} gewuerfelt</p>
    </section>
  );
};

export default AufrufAmZug;