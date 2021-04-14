import './SpielZuEnde.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';

const SpielZuEnde = props => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (

<div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>

        <Modal.Header>
          <Modal.Title>Herzlichen Glückwunsch!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>Du hast die Runde beendet, möchtest du auf diesem Spielfeld weiter üben?</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            handleClose()
            props.setSpielfigurPosition(props.spielfigurPosition - props.spielfeldgroesse);
            props.setPopup('aufruf');}}>Weiterspielen</Button>

          <Button variant="secondary" onClick={() => {
            handleClose()
            props.setPage('startseite')
            props.setSpielfigurPosition(0)
            }}>Zurück zur Startseite</Button>
        </Modal.Footer>

      </Modal>

    </div>


    
      //   <div class="zu-ende">
      //     <Button primary data-toggle="modal" data-target="#zu-ende">Du hast die Runde geschafft ✌️</Button>
      //     {/* Modal */}
      //     <Modal id="zu-ende" fade>
      //       <Modal.Dialog centered>
      //         <Modal.Content>
      //           <Modal.Header>
      //             <Modal.Title>Herzlichen Glückwunsch!!</Modal.Title>
      //           </Modal.Header>
      //           <Modal.Body>
      //             Do hast die Runde beendet, möchtest du auf diesem Spielfeld weiter üben?
      //           </Modal.Body>
      //           <Modal.Footer centered>
      //           <Modal.Close>
      //             <Button
      //             primary
      //             onClick={() => {
      //               props.setSpielfigurPosition(props.spielfigurPosition - props.spielfeldgroesse);
      //               props.setPopup('aufruf');
      //             }}
      //             >
      //               Weiterspielen
      //             </Button>
      //             <Button secondary onClick={() => {props.setPage('startseite'); 
      //             // props.setSpielfigurPosition(0);
      //             }} >Zurück zur Startseite</Button>
      //             </Modal.Close>
      //           </Modal.Footer>
      //         </Modal.Content>
      //       </Modal.Dialog>
      //     </Modal>
      //   </div>
      // );
  )}

export default SpielZuEnde;