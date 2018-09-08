import { createStore, applyMiddleware, compose} from 'redux';

import reducer from './reducer';

//  REDUX DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(reducer, composeEnhancers);