import './SpielZuEnde.css';
import { Modal, Button } from 'bootstrap-4-react';

const SpielZuEnde = props => {
  return (
        <div class="zu-ende">
          <Button primary data-toggle="modal" data-target="#zu-ende">Du hast die Runde geschafft ✌️</Button>
          {/* Modal */}
          <Modal id="zu-ende" fade>
            <Modal.Dialog centered>
              <Modal.Content>
                <Modal.Header>
                  <Modal.Title>Herzlichen Glückwunsch!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Do hast die Runde beendet, möchtest du auf diesem Spielfeld weiter üben?
                </Modal.Body>
                <Modal.Footer centered>
                <Modal.Close>
                  <Button primary   onClick={() => props.setSpielfigurPosition(props.spielfigurPosition - props.spielfeldgroesse)} >Weiterspielen</Button>
                  <Button secondary onClick={() => {props.setPage('startseite'); props.setSpielfigurPosition(0);}} >Zurück zur Startseite</Button>
                  </Modal.Close>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Dialog>
          </Modal>
        </div>
      );
};

export default SpielZuEnde;