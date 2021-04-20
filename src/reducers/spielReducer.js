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
  // Spielfelder-Array. Die Elemente repräsentieren die Feldtypen
  spielfeldArray: Array(60).fill(null).map((element, index) => index % 3 === 0 ? 'html' :
    index % 3 === 1 ? 'css' :
    'javascript'),
  // Eine Zahl, die dem Index von spielfeldArray entspricht und die Position von Spielfigur angibt.
  spielfigurPosition: 0,
  // Die Variable legt fest, welches Popup gerendert wird.
  popup: 'aufruf',
  // Die zuletzt gewürfelte Zahl. Sie wird gebraucht, um die Spielfigur zurückzusetzen.
  gewuerfelteZahl: 0,
  // Fragen-Array
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