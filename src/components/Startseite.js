import Spielanleitung from './Spielanleitung'
import './Startseite.css'
import { useDispatch } from 'react-redux';
import { setPage } from '../thunks/thunks';

const Startseite = props => {
  const dispatch = useDispatch();
  return (
    <div className="Startseite">
      <h1>Willkommen auf die Startseite!</h1>
      <button onClick={() => dispatch(setPage('spielseite'))}>
        Gehe zum Spiel!
      </button>
      <Spielanleitung />
    </div>
  );
}

export default Startseite;