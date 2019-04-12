import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const moment = require('moment');

class BtcTrendingCrypto extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    let currentPrice = this.props.data;
    let displayCryptoDate = [];   // STORE CRYPTODATE DATA
    let displayCrtptoPrice = []   // STORE CRYPTODATE PRICE

    let time = currentPrice.forEach((value, index) => {
       displayCryptoDate.push(moment.unix(value.time).format('h:mm a'))
    })

    let displayCurrentTrending = currentPrice.map((value, index) => {
      displayCrtptoPrice.push(value.close)
      return(
        <div key={ index } className='topTrendingCryproBox'>

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
      </div>
     );
  }
}
 
export default BtcTrendingCrypto;