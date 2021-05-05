import {
  SET_PAGE,
  SET_POPUP,
  SET_GEWUERFELTE_ZAHL,
  SET_CLIENT_ID,
  SET_SPIEL_ID,
  SET_SPIELFELD_ARRAY,
  SET_FRAGE,
  SET_CLIENTS,
  SET_WER_IST_DRAN,
  SET_SPIELFIGUR_POSITIONEN,
  RESET_SPIELFIGUR_POSITIONEN,
  SET_AKTION,
  SET_STARTSEITE_LOG,
  SET_ANTWORT_FEEDBACK
} from './types';

export const actionSetPage = page => ({
  type: SET_PAGE,
  payload: page
});

export const actionSetPopup = popup => ({
  type: SET_POPUP,
  payload: popup
});

export const actionSetGewuerfelteZahl = zahl => ({
  type: SET_GEWUERFELTE_ZAHL,
  payload: zahl
});

export const actionSetClientId = id => ({
  type: SET_CLIENT_ID,
  payload: id
});

export const actionSetSpielId = id => ({
  type: SET_SPIEL_ID,
  payload: id
});

export const actionSetSpielfeldArray = array => ({
  type: SET_SPIELFELD_ARRAY,
  payload: array
});

export const actionSetFrage = frage => ({
  type: SET_FRAGE,
  payload: frage
});

export const actionSetClients = clients => ({
  type: SET_CLIENTS,
  payload: clients
});

export const actionSetWerIstDran = order => ({
  type: SET_WER_IST_DRAN,
  payload: order
});

export const actionSetSpielfigurPositionen = object => ({
  type: SET_SPIELFIGUR_POSITIONEN,
  payload: object
});

export const actionResetSpielfigurPositionen = () => ({
  type: RESET_SPIELFIGUR_POSITIONEN
});

export const actionSetAktion = aktion => ({
  type: SET_AKTION,
  payload: aktion
});

export const actionSetStartseiteLog = string => ({
  type: SET_STARTSEITE_LOG,
  payload: string
});

export const actionSetAntwortFeedback = array => ({
  type: SET_ANTWORT_FEEDBACK,
  payload: array
});