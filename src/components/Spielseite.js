const Spielseite = props => {
  return (
    <div>
      <h1>Lasst uns Spielen!</h1>
      <button onClick={() => props.setPage('startseite')}>
        Gehe zurück zum Start!
      </button>
    </div>
  );
}

export default Spielseite;