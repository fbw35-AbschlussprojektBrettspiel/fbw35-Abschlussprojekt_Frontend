import {
  actionTogglePage,
  actionSetSpielfigurPosition,
  actionSetPopup,
  actionSetGewuerfelteZahl,
  actionFetchFragen
} from '../actions/actions';

import axios from 'axios';

const URL = 'http://localhost:3050/'

export const togglePage = () => dispatch => dispatch(actionTogglePage());

export const setSpielfigurPosition = position => dispatch => dispatch(actionSetSpielfigurPosition(position));

export const setPopup = popup => dispatch => dispatch(actionSetPopup(popup));

export const setGewuerfelteZahl = zahl => dispatch => dispatch(actionSetGewuerfelteZahl(zahl));

// fragen werden hier mit einer GET-Anfrage vom Server geholt

export const fetchFragen = () => dispatch => axios.get(URL + 'fragen/')
.then(response => dispatch(actionFetchFragen(response.data)))
.catch(error => console.error(error));