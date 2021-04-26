import {
  actionSetPage,
  actionSetSpielfigurPosition,
  actionSetPopup,
  actionSetGewuerfelteZahl,
  actionFetchFragen,
  actionSetClientId,
  actionSetSpielId,
  actionSetSpielfeldArray,
  actionSetFrage
} from '../actions/actions';

import axios from 'axios';

const URL = 'http://localhost:3050/';
const WEBSOCKET_URL = 'ws://localhost:3050';
const ws = new WebSocket(WEBSOCKET_URL);

export const setPage = page => dispatch => dispatch(actionSetPage(page));

export const setSpielfigurPosition = position => dispatch => dispatch(actionSetSpielfigurPosition(position));

export const setPopup = popup => dispatch => dispatch(actionSetPopup(popup));

export const setGewuerfelteZahl = zahl => dispatch => dispatch(actionSetGewuerfelteZahl(zahl));

// export const setClientId = id => dispatch => dispatch(actionSetClientId(id));

// export const setSpielId = id => dispatch => dispatch(actionSetSpielId(id));

// export const setSpielfeldArray = array => dispatch => dispatch(actionSetSpielfeldArray(array));

// fragen werden hier mit einer GET-Anfrage vom Server geholt

export const fetchFragen = () => dispatch => axios.get(URL + 'fragen/')
.then(response => dispatch(actionFetchFragen(response.data)))
.catch(error => console.error(error));

// websocket

export const connectWebsocket = () => dispatch => {
  ws.onmessage = message => {
    const response = JSON.parse(message.data);
    console.log(response);

    // connect
    if (response.method === 'connect') {
      dispatch(actionSetClientId(response.clientId));
    }

    // create
    if (response.method === 'create') {
      dispatch(actionSetSpielId(response.spiel.id));
      console.log('Spiel erfolgreich erstellt.');
    }

    // join
    if (response.method === 'join') {
      dispatch(actionSetSpielId(response.spiel.id));
      console.log('Spiel erfolgreich beitetreten');
    }

    // start
    if (response.method === 'start') {
      dispatch(actionSetSpielfeldArray(response.spielfeldArray));
      dispatch(actionSetPage('spielseite'));
      console.log('Spiel erfolgreich gestartet');
    }

    // wuerfeln
    if (response.method === 'wuerfeln') {
      dispatch(actionSetGewuerfelteZahl(response.gewuerfelteZahl));
      console.log('Erfolgreich gewürfelt');
    }

    // macheZug
    if (response.method === 'macheZug') {
      const neuePosition = response.neuePosition;
      const frage = response.frage;
      dispatch(actionSetSpielfigurPosition(neuePosition));
      dispatch(actionSetFrage(frage));
      console.log('Einen Zug erfolgreich gemacht');
      // später soll hier ermittelt werden, ob quizfrage- oder
      // aktion-popup angezeigt werden soll
      dispatch(actionSetPopup('quizfrage'));
    }

    // verschieben
    if (response.method === 'verschieben') {
      dispatch(actionSetSpielfigurPosition(response.neuePosition));
      console.log('Spielfigur erfolgreich verschoben');
    }

    // naechsterZug
    if (response.method === 'naechsterZug') {
      dispatch(actionSetPopup('aufruf'));
      console.log('Nächster Zug erfolgreich eingeleitet');
    }

  };
};

export const createSpiel = clientId => dispatch => {
  const payload = {
    method: 'create',
    clientId
  };
  ws.send(JSON.stringify(payload));
};

export const joinSpiel = (clientId, spielId) => dispatch => {
  const payload = {
    method: 'join',
    clientId,
    spielId
  };
  ws.send(JSON.stringify(payload));
};

export const startSpiel = (clientId, spielId) => dispatch => {
  const payload = {
    method: 'start',
    clientId,
    spielId
  };
  ws.send(JSON.stringify(payload));
};

export const wuerfeln = (clientId, spielId) => dispatch => {
  const payload = {
    method: 'wuerfeln',
    clientId,
    spielId
  };
  ws.send(JSON.stringify(payload));
};

export const macheZug = (clientId, spielId, neuePosition) => dispatch => {
  const payload = {
    method: 'macheZug',
    clientId,
    spielId,
    neuePosition
  };
  ws.send(JSON.stringify(payload));
};

export const verschiebeSpielfigur = (clientId, spielId, neuePosition) => dispatch => {
  const payload = {
    method: 'verschieben',
    clientId,
    spielId,
    neuePosition
  };
  ws.send(JSON.stringify(payload));
};

export const naechsterZug = (clientId, spielId) => dispatch => {
  const payload = {
    method: 'naechsterZug',
    clientId,
    spielId
  };
  ws.send(JSON.stringify(payload));
};