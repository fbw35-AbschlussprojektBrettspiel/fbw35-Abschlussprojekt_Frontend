import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './SpielerListe.css';

const SpielerListe = () => {
  const clients = useSelector(state => state.clients);

  return (
    <ul className="spieler-liste">
      {clients.map((element, index) => 
        <li key={index}>
          <FontAwesomeIcon
            icon={faUser}
            size="xs"
            className={`spielfigur-${index}`}
          />
          &nbsp;
          <span className="liste-name">{element.spielerName ? element.spielerName : `${index + 1}. Spieler`}</span>
        </li>
      )}
    </ul>
  );
};

export default SpielerListe;