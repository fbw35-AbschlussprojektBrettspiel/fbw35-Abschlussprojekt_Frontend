const Startseite = props => {
  return (
    <div>
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => props.setPage('spielseite')}>
        Gehe zum Spiel!
      </button>
    </div>
  );
}

export default Startseite;