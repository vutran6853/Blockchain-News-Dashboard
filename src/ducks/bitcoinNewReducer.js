import axios from 'axios';

//  INITAL VALUE
const BITCOINDATA = 'BITCOINDATA';
const SEVENDAYINFO = 'SEVENDAYINFO';

//  INITIAL STATE
const initialState = {
  bitcoinData: [],
  topTrendCoin: ['BTC','ZEC','DGD','LTC','DASH','DGB','ADA','ZEN','XMR','ETC','ETH', 'DOGE', 'BIX', 'XUC', 'BAT','BNB','BNT', 'BCH', 'BTS','CMT','DCN','ELF','EOS', 'FUN','GAS','GNT','GXS','HOT','NEO','NXT','OMG','OST','SNT','TRX','VET','XRP','XTZ','ZIL','ZRX', 'WOMEN', 'KMD','CNX','XVG','BCN','DCR','BCD','BTM','NXS','HSR','XZC','BTG','AID', 'MTL', 'GVT', 'CHAT', 'MTN', 'KNC', 'ZIP', 'DADI', 'ENG', 'HPB'],
  sevenDayBitcoinData: []
}

//  INITIAL ACTION CREATOR FOR PAYLOAD
export function getBitcoinData() {
  let {topTrendCoin} = initialState
  //  console.log(topTrendCoin)
  return {
    type: BITCOINDATA,
    payload: axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${topTrendCoin}&tsyms=USD`)        
                        
  }
}

export function getSevenDayInfo() {
 
  return {
    type: SEVENDAYINFO,
    payload: axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=10`)        
                        
  }
}


// HANDLE STATE CHANGES
export default function bitcoinNewReducer(state = initialState, action) {
  switch(action.type) {
    case `${BITCOINDATA}_FULFILLED`:
      // console.log(`${BITCOINDATA}_FULFILLED`, action.payload.data.DISPLAY)
    return {
      ...state,
      bitcoinData: action.payload,
    }
    case `${SEVENDAYINFO}_FULFILLED`:
    //  console.log(`${SEVENDAYINFO}_FULFILLED`, action.payload)
     return {
      ...state,
      sevenDayBitcoinData: action.payload,
    }
    default: 
    return state;
  }
}
