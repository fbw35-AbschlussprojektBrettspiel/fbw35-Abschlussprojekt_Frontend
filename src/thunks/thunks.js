import {
  actionSetPage,
  actionSetPopup,
  actionSetGewuerfelteZahl,
  actionSetClientId,
  actionSetSpielId,
  actionSetSpielfeldArray,
  actionSetFrage,
  actionSetClients,
  actionSetWerIstDran,
  actionSetSpielfigurPositionen,
  actionResetSpielfigurPositionen,
  actionSetAktion,
  actionSetStartseiteLog
} from '../actions/actions';

// const URL = 'http://localhost:3050/';
const WEBSOCKET_URL = 'ws://localhost:3050';
const ws = new WebSocket(WEBSOCKET_URL);

export const setPage = page => dispatch => dispatch(actionSetPage(page));

export const setPopup = popup => dispatch => dispatch(actionSetPopup(popup));

export const setGewuerfelteZahl = zahl => dispatch => dispatch(actionSetGewuerfelteZahl(zahl));

export const setSpielfigurPositionen = object => dispatch => dispatch(actionSetSpielfigurPositionen(object));

// export const setClientId = id => dispatch => dispatch(actionSetClientId(id));

// export const setSpielId = id => dispatch => dispatch(actionSetSpielId(id));

// export const setSpielfeldArray = array => dispatch => dispatch(actionSetSpielfeldArray(array));

// export const setStartseiteLog = string => dispatch => dispatch(actionSetStartseiteLog(string));

// websocket

export const connectWebsocket = () => dispatch => {
  // Wenn es keine Verbindung zum websocket-Server gibt
  ws.onclose = () => dispatch(actionSetStartseiteLog('Keine Verbindung zum Spielserver.'));
  
  ws.onmessage = message => {
    const response = JSON.parse(message.data);
    console.log(response);

    // connect
    if (response.method === 'connect') {
      dispatch(actionSetClientId(response.clientId));
      dispatch(actionSetStartseiteLog(response.mitteilung));
    }

    // create
    if (response.method === 'create') {
      dispatch(actionSetSpielId(response.spiel.id));
      dispatch(actionSetStartseiteLog(response.mitteilung));
      console.log('Spiel erfolgreich erstellt.');
    }

    // join
    if (response.method === 'join') {
      dispatch(actionSetSpielId(response.spiel.id));
      dispatch(actionSetClients(response.spiel.clients));
      dispatch(actionSetStartseiteLog(response.mitteilung));
      console.log('Spiel erfolgreich beitetreten');
    }

    // start
    if (response.method === 'start') {
      dispatch(actionSetSpielfeldArray(response.spielfeldArray));
      dispatch(actionSetSpielfigurPositionen(response.initialPositionen));
      dispatch(actionSetPage('spielseite'));
      console.log('Spiel erfolgreich gestartet');
    }

    // startseiteWarnung
    if (response.method === 'startseiteWarnung') {
      dispatch(actionSetStartseiteLog(response.mitteilung));
    }

    // wuerfeln
    if (response.method === 'wuerfeln') {
      dispatch(actionSetGewuerfelteZahl(response.gewuerfelteZahl));
      console.log('Erfolgreich gewürfelt');
    }

    // macheZug
    if (response.method === 'macheZug') {
      const neuePosition = response.neuePosition;
      const werIstDran = response.werIstDran;
      const positionObjekt = {};
      positionObjekt[werIstDran] = neuePosition;
      console.log('zusammengebasteltes positionObjekt', positionObjekt);
      dispatch(actionSetSpielfigurPositionen(positionObjekt));
      if (response.ende) {
        dispatch(actionSetPopup('ende'));
        console.log('Spielende erfolgreich übermittelt');
      } else if (response.frage) {
        const frage = response.frage;
        dispatch(actionSetFrage(frage));
        console.log('Einen Zug erfolgreich gemacht und Frage vom Server bekommen');
        dispatch(actionSetPopup('quizfrage'));
      } else {
        const aktion = response.aktion;
        dispatch(actionSetAktion(aktion));
        console.log('Einen Zug erfolgreich gemacht und Aktion vom Server bekommen');
        dispatch(actionSetPopup('aktion'));
      }
    }

    // verschieben
    if (response.method === 'verschieben') {
      const neuePosition = response.neuePosition;
      const werIstDran = response.werIstDran;
      const positionObjekt = {};
      positionObjekt[werIstDran] = neuePosition;
      dispatch(actionSetSpielfigurPositionen(positionObjekt));
      console.log('Spielfigur erfolgreich verschoben');
    }

    // naechsterZug
    if (response.method === 'naechsterZug') {
      dispatch(actionSetWerIstDran(response.werIstDran));
      dispatch(actionSetPopup('aufruf'));
      console.log('Nächster Zug erfolgreich eingeleitet');
    }

    // beenden
    if (response.method === 'beenden') {
      dispatch(actionSetSpielId(''));
      dispatch(actionSetPage('startseite'));
      dispatch(actionSetSpielfeldArray([]));
      dispatch(actionSetGewuerfelteZahl(0));
      dispatch(actionResetSpielfigurPositionen());
      dispatch(actionSetWerIstDran(0));
      dispatch(actionSetFrage({}));
      dispatch(actionSetAktion({}));
      dispatch(actionSetClients({}));
      dispatch(actionSetPopup('aufruf'));
      dispatch(actionSetStartseiteLog('Das letzte Spiel erfolgreich beendet.'));
      console.log('Spiel erfolgreich beendet');
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

export const joinSpiel = (clientId, spielId, spielerName) => dispatch => {
  const payload = {
    method: 'join',
    clientId,
    spielId,
    spielerName
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

export const beendeSpiel = (clientId, spielId) => dispatch => {
  const payload = {
    method: 'beenden',
    clientId,
    spielId
  };
  ws.send(JSON.stringify(payload));
};