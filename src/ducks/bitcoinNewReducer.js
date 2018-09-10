import axios from 'axios';
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
var _ = require('lodash');

//  INITAL VALUE
const BITCOINDATA = 'BITCOINDATA';

//  INITIAL STATE
const initialState = {
  bitcoinData: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getBitcoinData(bitcoinData) {

  return {
    type: BITCOINDATA,
    payload: axios.get('https://min-api.cryptocompare.com/data/all/coinlist')        
    
  }

}

// HANDLE STATE CHANGES
export default function bitcoinNewReducer(state = initialState, action) {
  switch(action.type) {
    case `${BITCOINDATA}_FULFILLED`:

      console.log(`${BITCOINDATA}_FULFILLED`, action.payload.data.Data)
    return {
      
      ...state,
      bitcoinData: action.payload.data
      
    }

    default: 
    return state;
  }

}
