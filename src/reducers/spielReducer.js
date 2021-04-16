import {
  SET_PAGE,
  SET_SPIELFIGUR_POSITION,
  SET_POPUP,
  SET_GEWUERFELTE_ZAHL,
  FETCH_FRAGEN
} from '../actions/types';

const initialState = {
  // page legt fest, welche Seite ganz oben im App gerendert wird
  page: 'startseite',
  spielfeldArray: Array(60).fill(null),
  spielfigurPosition: 0,
  popup: 'aufruf',
  gewuerfelteZahl: 0,
  fragen: []
};

const spielReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PAGE:
      return {...state, page: action.payload};
    case SET_SPIELFIGUR_POSITION:
      return {...state, spielfigurPosition: action.payload};
    case SET_POPUP:
      return {...state, popup: action.payload};
    case SET_GEWUERFELTE_ZAHL:
      return {...state, gewuerfelteZahl: action.payload};
    case FETCH_FRAGEN:
      return {...state, fragen: [
        ...state.fragen,
        ...action.payload
      ]};
    default:
      return state;
  }
};

export default spielReducer;