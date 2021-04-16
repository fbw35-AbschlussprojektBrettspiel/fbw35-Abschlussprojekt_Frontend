import './Spielfeld.css';
import { useSelector } from 'react-redux';

const Spielfeld = props => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  return (
    <div className={`spielfeld-${props.order}`}>
      {props.order}
      {/* Hier wird geprüft, ob die Spielfigur auf diesem Spielfeld steht */}
      {props.order === spielfigurPosition ? "X" : ""}
    </div>
  );
};

export default Spielfeld;