import {
  SET_PAGE,
  SET_SPIELFIGUR_POSITION,
  SET_POPUP,
  SET_GEWUERFELTE_ZAHL,
  FETCH_FRAGEN,
  SET_CLIENT_ID,
  SET_SPIEL_ID,
  SET_SPIELFELD_ARRAY,
  SET_FRAGE
} from './types';

export const actionSetPage = page => ({
  type: SET_PAGE,
  payload: page
});

export const actionSetSpielfigurPosition = position => ({
  type: SET_SPIELFIGUR_POSITION,
  payload: position
});

export const actionSetPopup = popup => ({
  type: SET_POPUP,
  payload: popup
});

export const actionSetGewuerfelteZahl = zahl => ({
  type: SET_GEWUERFELTE_ZAHL,
  payload: zahl
});

export const actionFetchFragen = fragen => ({
  type: FETCH_FRAGEN,
  payload: fragen
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