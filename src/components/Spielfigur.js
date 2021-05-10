import './Spielfigur.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Spielfigur = props => {
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  
  const eigenePosition = spielfigurPositionen[props.order];
  const spielfigurPositionenArray = Object.entries(spielfigurPositionen);
  const aufSelbemFeld = spielfigurPositionenArray.filter(spielfigur => spielfigur[1] === eigenePosition);
  let positionVerschiebung = '';

  if (aufSelbemFeld.length > 1) {
    positionVerschiebung = `positionVerschiebung-${aufSelbemFeld.length}-${aufSelbemFeld.findIndex(element => element[0] === String(props.order)) + 1}`;
  }

  return (
    <div className={`spielfeld-${spielfigurPositionen[props.order]} spielfigur-${props.order} ${positionVerschiebung}`}>
      <FontAwesomeIcon icon={faUser} size="xs" />
    </div>
  );
};

export default Spielfigur;