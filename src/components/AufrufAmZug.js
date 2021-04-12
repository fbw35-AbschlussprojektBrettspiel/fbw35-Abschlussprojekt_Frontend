import './AufrufAmZug.css';

const AufrufAmZug = props => {
  return (
    <section className="am-zug">
      <p>Bitte einen Zug machen!</p>
      <button
        onClick={() => props.setSpielfigurPosition(props.spielfigurPosition + 1)}
      >
        Ein Feld vor
      </button>
    </section>
  );
};

export default AufrufAmZug;