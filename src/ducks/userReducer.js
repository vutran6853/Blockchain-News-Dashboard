import axios from 'axios';

//  INITAL VALUE
let GET_USER = 'GET_USER';

//  INITIAL STATE
let initialState = {
  userData: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getUserData() {
  return {
    type: GET_USER,
    payload: axios.get('/api/user')
  }
}

// HANDLE STATE CHANGES
export default function getUserReducer(state = initialState, action) {
  switch(action.type) {
    case `${GET_USER}_FULFILLED`:
    // console.log(`${GET_USER}_FULFILLED`, action.payload.data)
    return {
      ...state,
      userData: action.payload
      
    }
    default: 
    return state;
  }
}