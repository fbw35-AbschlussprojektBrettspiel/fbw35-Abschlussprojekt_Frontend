import './Spielfeld.css';
import './Spielfigur.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Spielfigur = props => {
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);

  return (
    <div className={`spielfeld-${spielfigurPositionen[props.order]} spielfigur spielfigur-${props.order}`}>
      <FontAwesomeIcon icon={faUser} size="xs" />
    </div>
  );
};

export default Spielfigur;