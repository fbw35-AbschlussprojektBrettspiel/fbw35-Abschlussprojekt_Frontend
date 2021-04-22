import './Spielfeld.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

const Spielfeld = props => {
  return (
    <div className={`spielfeld-${props.order}`}>
      {
        {
          html: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} style={{ color: "red" }} />
            <FontAwesomeIcon icon={faFileCode} inverse transform="shrink-6" />
          </span>,
          css: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} style={{ color: "blue" }} />
            <FontAwesomeIcon icon={faCss3} inverse transform="shrink-6" />
          </span>,
          javascript: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} style={{ color: "orange" }} />
            <FontAwesomeIcon icon={faJs} inverse transform="shrink-6" />
          </span>,
          aktion: <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "green" }} />
        }[props.feldtyp]
      }
    </div>
  );
};

export default Spielfeld;