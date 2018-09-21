import axios from 'axios';

//  INITAL VALUE
const BITCOINDATA = 'BITCOINDATA';
const SEVENDAYINFO = 'SEVENDAYINFO';

//  INITIAL STATE
const initialState = {
  bitcoinData: [],
  topTrendCoin: ['BTC','ZEC','DGD','LTC','DASH','DGB','AE','ADA','ZEN','XMR','ETC','AID', 'DOGE', 'BIX', 'XUC',  'ARK', 'BAT','BNB','BNT','BTS','CMT','DCN','ELF','EOS','ETA','FUN','GAS','GNT','GXS','HOT','NEO','NXT','OMG','ONT','OST','SNT','TRX','VET','XRP','XTZ','ZIL','ZRX', 'BCH', 'KMD','CNX','XVG','BCN','DCR','BCD','BTM','NXS','HSR','XZC','SC','BTG','ELA','ETH', 'MTL', 'GVT', 'CHAT', 'MTN', 'KNC', 'BCPT', 'ZIP', 'DADI', 'ENG', 'HPB'],
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
