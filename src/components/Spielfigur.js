import './Spielfeld.css';
import { useSelector } from 'react-redux';

const Spielfigur = props => {
  const spielfigurPositionen = useSelector(state => state.spielfigurPositionen);
  const werIstDran = useSelector(state => state.werIstDran);

  return (
    <div className={`spielfeld-${spielfigurPositionen[props.order]} spielfigur spielfigur-${props.order}`}>
      X
    </div>
  )
};

export default Spielfigur;