import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from '../profile/profile.css'
import Profile from '../profile/profile';
import { connect } from 'react-redux';
import { getBitcoinData } from '../../ducks/bitcoinNewReducer';
import Axios from 'axios';

global.fetch = require('node-fetch')
const cc = require('cryptocompare')
var _ = require('lodash');


class BitcoinNews extends Component {
  constructor(props) {
    super(props);

    // INITIAL LOCAL STATE
    this.state = {
      bitcoinData: ['AE','ADA','AID','ANA','ANO','ARK','ASH','BAT','BNB','BNT','BTS','CMT','DCN','DGD','EEM','ELF','EOS','ETA','FUN','GAS','GNT','GXS','HOC','HOT','NEO','NXT','OAC','OMG','ONT','OST','ROP','SDT','SNT','TRX','TUM','ULS','USD','VES','VET','XRP','XTZ','ZIL','ZRX','TCD','TCP','BTC','KMD','ZEN','CNX','XVG','BCN','DCR','LTC','ZEC','BCD','BTM','NXS','ETC','DGB','HSR','XMR','XZC','SC','BTG','ELA','ETH'],
      allBitcoinPrice: []

    }
  }

  componentDidMount() {
    let {bitcoinData} = this.state;
   Axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${bitcoinData}&tsyms=USD`)
   .then((response) => {
     console.log(response.data.DISPLAY)
     this.setState({ allBitcoinPrice: response.data.DISPLAY })
   })
  }


  render() {
    let { allBitcoinPrice } = this.state;
    let BitcoinPrice = allBitcoinPrice
    let singleBitcoinItem = []

    // _.forEach(BitcoinPrice, function(value, key) {
    //   // console.log(key, value.USD)
    //   singleBitcoinItem = key, value.USD
    //   return singleBitcoinItem;
    // })


    let single = _.chain(BitcoinPrice)
    _.forEach(BitcoinPrice, function(value, key) {
      console.log(key, value.USD)
      return BitcoinPrice
    })
    
    let sin = _.map(BitcoinPrice, (value, index) => {
      console.log(value.USD, index)
      return(
        <div>
          <p>{value}</p>
        </div>
      )
    })
    
     
    
    return ( 
      <div>
        <p>BitcoinNews Component</p>
        <button onClick={ () => this.props.getBitcoinData() }>Click</button>
        <Profile/>
        { sin }
      </div>
     );
  }
}

function mapStateToProps(state) {
  return state
}


 
export default connect(mapStateToProps, { getBitcoinData } )(BitcoinNews);