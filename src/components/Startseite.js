import Spielanleitung from './Spielanleitung'
import './Startseite.css'

const Startseite = props => {
  return (
    <div className="Startseite">
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => props.setPage('spielseite')}>
        Gehe zum Spiel!
      </button>
      <Spielanleitung />
    </div>
  );
}

export default Startseite;