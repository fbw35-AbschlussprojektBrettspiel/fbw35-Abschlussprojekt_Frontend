import './SpielZuEnde.css';

const SpielZuEnde = props => {
  return (
    <section className="zu-ende">
      <p>Du hast gewonnen ✌️</p>
      <button
        onClick={() => props.setPage('startseite')}
      >
        Zurück zur Startseite
      </button>
    </section>
  );
};

export default SpielZuEnde;