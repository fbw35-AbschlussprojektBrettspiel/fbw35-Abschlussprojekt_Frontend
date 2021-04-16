import {
  TOGGLE_PAGE,
  SET_SPIELFIGUR_POSITION,
  SET_POPUP,
  SET_GEWUERFELTE_ZAHL,
  FETCH_FRAGEN
} from './types';

export const actionTogglePage = () => ({
  type: TOGGLE_PAGE
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