import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // die Zeile kann weg für Deployment
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const middleware = [thunk];

// Zum Deployment
// const composedEnhancer = applyMiddleware(...middleware);

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducer, composedEnhancer);

export default store;