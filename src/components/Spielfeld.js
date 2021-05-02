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
            <FontAwesomeIcon icon={faCircle} 
            style={{ color: "red", backgroundColor:"white", borderRadius:"100%", border:"3px darkred solid" }} />
            <FontAwesomeIcon icon={faFileCode} inverse transform="shrink-6" />
          </span>,
          css: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} 
            style={{ color: "blue", backgroundColor:"white", borderRadius:"100%", border:"3px darkblue solid" }} />
            <FontAwesomeIcon icon={faCss3} inverse transform="shrink-6" />
          </span>,
          javascript: <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} 
            style={{ color: "orange", backgroundColor:"white", borderRadius:"100%", border:"3px rgb(255, 81, 0) solid" }} />
            <FontAwesomeIcon icon={faJs} inverse transform="shrink-6" />
          </span>,
          aktion: <FontAwesomeIcon icon={faQuestionCircle} 
          style={{ color: "green", backgroundColor:"white", borderRadius:"100%", border:"3px darkgreen solid" }} />
        }[props.feldtyp]
      }
    </div>
  );
};

export default Spielfeld;