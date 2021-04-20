import './Spielfeld.css';
import { useSelector } from 'react-redux';

const Spielfigur = () => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);

  return (
    <div className={`spielfeld-${spielfigurPosition} spielfigur`}>
      ♟️
    </div>
  )
};

export default Spielfigur;