import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // die Zeile kann weg für Deployment
import thunk from 'redux-thunk';
import spielReducer from '../reducers/spielReducer';

const middleware = [thunk];

// Zum Deployment
const composedEnhancer = applyMiddleware(...middleware);

// const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(spielReducer, composedEnhancer);

export default store;