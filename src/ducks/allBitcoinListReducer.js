import axios from 'axios';

// INITAL VALUE
const MASTERCOINLIST = 'MASTERCOINLIST';

//  INITIAL STATE
const initialState = {
  allCoinList: [],
  favCoinId: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getAllCoinData() {
  return {
    type: MASTERCOINLIST,
    payload: axios.get('/api/allbitcoinlist')
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
    default: 
    return state;
  }
}