import './Spielfeld.css';

const Spielfeld = props => {
  return (
    <div className={`spielfeld-${props.order}`}>
      {props.order}
    </div>
  );
};

export default Spielfeld;