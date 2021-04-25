import {
  actionSetPage,
  actionSetSpielfigurPosition,
  actionSetPopup,
  actionSetGewuerfelteZahl,
  actionFetchFragen,
  actionSetClientId,
  actionSetSpielId
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
      dispatch(actionSetPage('spielseite'));
      console.log('Spiel erfolgreich gestartet');
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