import axios from 'axios';

//  INITAL VALUE
let GET_BITCOININFO = 'GET_BITCOININFO';
let GET_HISTORYCOIN = 'GET_HISTORYCOIN';

//  INITIAL STATE
let initialState = {
  chartsbitcoinData: [],
  historyCoinData: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getChartsData() {
  return {
    type: GET_BITCOININFO,
    payload: axios.get('/api/bitcoin')
  }
}

export function getHistoryCoinData() {
  return {
    type: GET_HISTORYCOIN,
    payload: axios.get('https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=alltime&?format=json')
  }
}

// HANDLE STATE CHANGES
export default function getChartsReducer(state = initialState, action) {
  switch(action.type) {
    case `${GET_BITCOININFO}_FULFILLED`:
    // console.log(`${GET_BITCOININFO}_FULFILLED`, action.payload.data)
    return {
      ...state,
      chartsbitcoinData: action.payload
    }
    // console.log(`${GET_HISTORYCOIN}_FULFILLED`, action.payload)
    case `${ GET_HISTORYCOIN }_FULFILLED`:
    return {
      ...state,
      historyCoinData: action.payload
    }
    default: 
    return state;
  }
}