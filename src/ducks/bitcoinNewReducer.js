import axios from 'axios';

//  INITAL VALUE
const BITCOINDATA = 'BITCOINDATA';
const COINVOLUMES = 'COINVOLUMES';

//  INITIAL STATE
const initialState = {
  bitcoinData: [],
  topTrendCoin: ['AE','ADA','AID','ANA','ANO','ARK','ASH','BAT','BNB','BNT','BTS','CMT','DCN','DGD','EEM','ELF','EOS','ETA','FUN','GAS','GNT','GXS','HOC','HOT','NEO','NXT','OAC','OMG','ONT','OST','ROP','SDT','SNT','TRX','TUM','ULS','USD','VES','VET','XRP','XTZ','ZIL','ZRX','TCD','TCP','BTC','KMD','ZEN','CNX','XVG','BCN','DCR','LTC','ZEC','BCD','BTM','NXS','ETC','DGB','HSR','XMR','XZC','SC','BTG','ELA','ETH']

}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getBitcoinData(bitcoinData) {
  let {topTrendCoin} = initialState
  return {
    type: BITCOINDATA,
    payload: axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${topTrendCoin}&tsyms=USD`)        
                        
  }
}

// HANDLE STATE CHANGES
export default function bitcoinNewReducer(state = initialState, action) {
  switch(action.type) {
    case `${BITCOINDATA}_FULFILLED`:

      // console.log(`${BITCOINDATA}_FULFILLED`, action.payload.data.DISPLAY)
    return {
      ...state,
      bitcoinData: action.payload 
    }
    default: 
    return state;
  }
}
