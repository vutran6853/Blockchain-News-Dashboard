import React, { Component } from 'react';
import axios from 'axios';
import { Bubble } from 'react-chartjs-2';

const moment = require('moment');

class TestTrendingCrypto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: [],
     }
  }
  componentDidMount() {
    this.timerID = setInterval( () => 
    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=ZEC&tsym=GBP&limit=10')
    .then((response) => this.setState({ currentPrice: response.data.Data }))
    .catch((error) => console.log(`Fail to Fetch Data`, error))
     , 11000);
     
  }

  render() { 
    let { currentPrice } = this.state;
    let displayCryptoDate = [];   // STORE CRYPTODATE DATA
    let displayCrtptoPrice = []   // STORE CRYPTODATE PRICE

    let time = currentPrice.forEach((value, index) => {
       displayCryptoDate.push(moment.unix(value.time).format('h:mm a'))
    });

    let displayCurrentTrending = currentPrice.map((value, index) => {
      displayCrtptoPrice.push(value.close)
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
          label: 'test',
          fill: false,
          lineTension: 0.1,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FF6384',
            '#36A2EB',
            '#FF6384',
            '#36A2EB',
            '#FF6384',
            '#36A2EB',
            '#FF6384',
            '#36A2EB',
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
          borderColor: 'red',
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
          data:  [{x:10,y:20,r:5}]
        }
      ]
    };

    return ( 
      <div className='topTrendingCryptoZECBox'>
        { displayCurrentTrending }
        <Bubble data={ data } width="700" id='btcLineGraphBox'/>
        
      </div>
     );
  }
}
 
export default TestTrendingCrypto;