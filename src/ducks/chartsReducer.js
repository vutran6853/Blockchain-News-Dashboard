import axios from 'axios';

//  INITAL VALUE
let GET_BITCOININFO = 'GET_BITCOININFO';

//  INITIAL STATE
let initialState = {
  chartsbitcoinData: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getChartsData() {
  return {
    type: GET_BITCOININFO,
    payload: axios.get('/api/bitcoin')
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

    default: 
    return state;
  }
}