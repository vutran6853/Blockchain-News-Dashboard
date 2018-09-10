import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import user from './userReducer';
import bitcoinNewReducer from './bitcoinNewReducer';


// USE FOR MULT REDUCERS
const combinedReducers = combineReducers({
  // user: userReducer,
  bitcoinNew: bitcoinNewReducer 
});

//  REDUX DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));


// STORE COMBINREDUCER AND MIDDLEWARE INTO STORE
const store = createStore(combinedReducers, middlewares)

export default store;