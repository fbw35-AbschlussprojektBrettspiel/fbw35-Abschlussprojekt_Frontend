import Spielanleitung from './Spielanleitung';
import './Startseite.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  connectWebsocket,
  createSpiel,
  joinSpiel,
  startSpiel,
} from '../thunks/thunks';
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap';
import logo from '../img/LogoSpiel.png';

const Startseite = () => {
  const [textInput, setTextInput] = useState('');
  const [nameTextInput, setNameTextInput] = useState('');
  const [logTextInput, setLogTextInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectWebsocket());
  }, [dispatch]);

  const clientId = useSelector((state) => state.clientId);
  const spielId = useSelector((state) => state.spielId);
  const startseiteLog = useSelector((state) => state.startseiteLog);

  useEffect(() => setTextInput(spielId), [spielId]);
  useEffect(() => setLogTextInput(startseiteLog), [startseiteLog]);

  return (
    <section className="startseite">
      <Container className="text-center mt-3">
        <Image src={logo} fluid />
      </Container>
      <h1>Das Onlinebrettspiel</h1>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card className="mb-2" border="info">
              <Card.Body>
                <Card.Text className="lead">
                  Möchtest du ein neues Spiel erstellen? Dann erstelle es hier
                  und gib die Spiel-ID an deine Mitspieler weiter.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(createSpiel(clientId))}
                  block
                  className="button-platz"
                >
                  Neues Spiel
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="mb-2" border="info">
              <Card.Body>
                <Card.Text className="lead">
                  Hier kannst du dem Spiel beitreten.
                </Card.Text>
                <Card.Text className="lead">
                  Oder hast du eine Spiel-ID von deinen Freunden bekommen? Dann
                  trage die Spiel-ID ein und trete dem Spiel bei.
                </Card.Text>
                <input
                  type="text"
                  name="spiel-id"
                  id="spiel-id"
                  placeholder="Spiel-ID"
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                />
                <input
                  type="text"
                  name="spieler-name"
                  id="spieler-name"
                  placeholder="Spielername (optional)"
                  maxLength="9"
                  value={nameTextInput}
                  onChange={(event) => setNameTextInput(event.target.value)}
                />
                <Button
                  variant="primary"
                  onClick={() =>
                    dispatch(
                      joinSpiel(clientId, spielId || textInput, nameTextInput)
                    )
                  }
                  block
                >
                  Spiel beitreten
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="mb-2" border="info">
              <Card.Body>
                <Card.Text className="lead">
                  Sind alle Mitspieler dem Spiel beigetreten? Dann lasst uns das
                  Spiel starten!
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(startSpiel(clientId, spielId))}
                  block
                  className="button-platz"
                >
                  Spiel starten
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="mb-2" border="info">
              <Card.Body>
                <textarea
                  name="startseite-log"
                  id="startseite-log"
                  rows="6"
                  value={logTextInput}
                  disabled
                ></textarea>
                <Spielanleitung />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Startseite;
