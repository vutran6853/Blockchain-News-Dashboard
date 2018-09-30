import React, { Component } from 'react';
import axios from 'axios';
import {Line } from 'react-chartjs-2';
var _ = require('lodash');
const moment = require('moment');

class EthTrendingCrypto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topTrendingCoin: ['BTC', 'ETH', 'ZEC', 'DASH'], 
      currentPrice: [],
      usd:  ['1', '3', 4],
      TrendingCoinName: [],
      TrendingCoinPrice: []
     }
  }
  componentDidMount() {
    let { topTrendingCoin } = this.state;

    this.timerID = setInterval( () => 
    axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=GBP&limit=30`)
    .then((response) => {
      // console.log(response)
      this.setState({ currentPrice: response.data.Data })
    })
    .catch((error) => {
      console.log(`Fail to Fetch Data`, error)
    })
     , 15000 );
     
  }

  render() { 
    let { currentPrice } = this.state;
    // console.log(currentPrice)
    let displayCryptoDate = [];   // STORE CRYPTODATE DATA
    let displayCrtptoPrice = []   // STORE CRYPTODATE PRICE

    // console.log(displayCrtptoPrice)
    let time = currentPrice.forEach((value, index) => {
      //  console.log(moment.unix(value.time).format('MMMM Do, h:mm a'), index)
       displayCryptoDate.push(moment.unix(value.time).format('h:mm a'))
    })
    // console.log(moment.unix(displaycryptoDate[0]).format('MMMM Do, h:mm a'))

    // console.log(displayCryptoDate)

    let displayCurrentTrending = currentPrice.map((value, index) => {
      displayCrtptoPrice.push(value.close)
      // console.log('VALUE: ', value, 'INDEX:', index)
      return(
        <div key={index} className='topTrendingCryproBox'>
          
        </div>
      )
    })


///////////////////////////////////////////////////////////////////////////////////////////////////

    const data = {
      labels: displayCryptoDate,
      datasets: [
        {
          label: 'ETH',
          fill: false,
          lineTension: 0.1,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
          borderColor: 'green',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: displayCrtptoPrice
        }
      ]
    };

    return ( 
      <div className='topTrendingCryptoETHBox'>
        { displayCurrentTrending }
       
        
          <Line  data={data} width="700" id='btcLineGraphBox' />
        
      </div>
     );
  }
}
 
export default EthTrendingCrypto;