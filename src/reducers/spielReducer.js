import {
  SET_PAGE,
  SET_SPIELFIGUR_POSITION,
  SET_POPUP,
  SET_GEWUERFELTE_ZAHL,
  FETCH_FRAGEN,
  SET_CLIENT_ID,
  SET_SPIEL_ID,
  SET_SPIELFELD_ARRAY,
  SET_FRAGE,
  SET_CLIENTS,
  SET_WER_IST_DRAN,
  SET_SPIELFIGUR_POSITIONEN,
  RESET_SPIELFIGUR_POSITIONEN,
  SET_AKTION
} from '../actions/types';

const initialState = {
  // page legt fest, welche Seite ganz oben im App gerendert wird
  page: 'startseite',
  // Spielfelder-Array. Die Elemente repräsentieren die Feldtypen
  spielfeldArray: [],
  // Eine Zahl, die dem Index von spielfeldArray entspricht und die Position von Spielfigur angibt.
  spielfigurPosition: 0,
  // Positionen der Spielfiguren, die dem Index von spielfeldArray entsprechen
  spielfigurPositionen: {},
  // Die Variable legt fest, welches Popup gerendert wird.
  popup: 'aufruf',
  // Die zuletzt gewürfelte Zahl. Sie wird gebraucht, um die Spielfigur zurückzusetzen.
  gewuerfelteZahl: 0,
  // Fragen-Array
  fragen: [],
  // zufällige Frage vom Server
  frage: {},
  // zufällige Aktion vom Server
  aktion: {},
  // lokale Klient-Id
  clientId: '',
  // Spiel-Id
  spielId: '',
  // array aus clients des Spiels, jeder client ist ein Objekt aus clientId und order
  clients: [],
  // wer (anhand von order) ist dran
  werIstDran: 0
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
    case SET_CLIENT_ID:
      return {...state, clientId: action.payload};
    case SET_SPIEL_ID:
      return {...state, spielId: action.payload};
    case SET_SPIELFELD_ARRAY:
      return {...state, spielfeldArray: action.payload};
    case SET_FRAGE:
      return {...state, frage: action.payload};
    case SET_CLIENTS:
      return {...state, clients: action.payload};
    case SET_WER_IST_DRAN:
      return {...state, werIstDran: action.payload};
    case SET_SPIELFIGUR_POSITIONEN:
      return {...state, spielfigurPositionen: {
        ...state.spielfigurPositionen,
        ...action.payload
      }};
    case RESET_SPIELFIGUR_POSITIONEN:
      return {...state, spielfigurPositionen: {}};
    case SET_AKTION:
      return {...state, aktion: action.payload};
    default:
      return state;
  }
};

export default spielReducer;