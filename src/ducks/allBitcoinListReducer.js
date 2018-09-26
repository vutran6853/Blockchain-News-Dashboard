import axios from 'axios';

// INITAL VALUE
const MASTERCOINLIST = 'MASTERCOINLIST';
const BITCOINIMAGE = 'BITCOINIMAGE';

//  INITIAL STATE
const initialState = {
  allCoinList: [],
  favCoinId: [],
  bitcoinImage: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getAllCoinData() {
  return {
    type: MASTERCOINLIST,
    payload: axios.get('/api/allbitcoinlist')
  }
}

export function getBitcoinImageData() {
  return {
    type: BITCOINIMAGE,
    payload: axios.get('/api/bitcoinImage')
  }
}

// HANDLE STATE CHANGES
export default function allBitcoinListReducer(state = initialState, action) {
  switch(action.type) {
    case `${MASTERCOINLIST}_FULFILLED`:
  
    // console.log(`${MASTERCOINLIST}_FULFILLED`, action.payload)
    return {
      ...state,
      allCoinList: action.payload
    }
    case `${BITCOINIMAGE}_FULFILLED`:
    return{
      ...state,
      bitcoinImage: action.payload
    }
    default: 
    return state;
  }
}