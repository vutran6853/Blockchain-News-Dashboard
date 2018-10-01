import React, { Component } from 'react';
import axios from 'axios';
import {Line, Pie } from 'react-chartjs-2';
var _ = require('lodash');
const moment = require('moment');

class BtcTrendingCrypto extends Component {
  constructor(props) {
    super(props);

    
  }
  
  render() { 
    // console.log(this.props.data)
    let  currentPrice = this.props.data;
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
          label: 'BTC',
          fill: false,
          lineTension: 0.1,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
          borderColor: 'rgba(75,192,192,1)',
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
      <div className='topTrendingCryptoBTCBox'>
        { displayCurrentTrending }

        <Line data={data} width="700" id='btcLineGraphBox' />
        {/* <CoinApi/> */}

      </div>
     );
  }
}
 
export default BtcTrendingCrypto;