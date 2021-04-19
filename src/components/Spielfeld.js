import './Spielfeld.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

const Spielfeld = props => {
  const spielfigurPosition = useSelector(state => state.spielfigurPosition);
  const thema = props.order % 3 === 0 ? 'html' :
    props.order % 3 === 1 ? 'css' :
      'javascript';

  return (
    <div className={`spielfeld-${props.order}`}>
      {/* {props.order} */}
      {
        {
          html: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} style={{ color: "orange" }} />
            <FontAwesomeIcon icon={faFileCode} inverse transform="shrink-6" />
          </span>,
          css: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} style={{ color: "blue" }} />
            <FontAwesomeIcon icon={faCss3} inverse transform="shrink-6" />
          </span>,
          javascript: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} style={{ color: "yellow" }} />
            <FontAwesomeIcon icon={faJs} inverse transform="shrink-6" />
          </span>
        }[thema]
      }
      {/* Hier wird geprüft, ob die Spielfigur auf diesem Spielfeld steht */}
      {props.order === spielfigurPosition ? "X" : ""}
    </div>
  );
};

export default Spielfeld;