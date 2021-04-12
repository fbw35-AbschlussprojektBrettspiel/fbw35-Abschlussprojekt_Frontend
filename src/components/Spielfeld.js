import './Spielfeld.css';

const Spielfeld = props => {
  return (
    <div className={`spielfeld-${props.order}`}>
      {props.order}
      {/* Hier wird geprüft, ob die Spielfigur auf diesem Spielfeld steht */}
      {props.order === props.spielfigurPosition ? "X" : ""}
    </div>
  );
};

export default Spielfeld;