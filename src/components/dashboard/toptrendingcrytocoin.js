import React, { Component } from 'react';
import axios from 'axios';
import {Line, Pie } from 'react-chartjs-2';
import TopTrendingBTC from './topTrendingBTC';

var _ = require('lodash');
const moment = require('moment');

class TopTrendingCryptoCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topTrendingCoin: ['BTC', 'ETH', 'ZEC', 'DASH'], 
      currentPrice: [],
      usd:  ['1', '3', 4],
      TrendingCoinName: [],
      TrendingCoinPrice: [],
      data:{
        labels: this.pops,
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
            data: this.props
          }
        ]
      }
  
     }
  }
  componentDidMount() {
    let { topTrendingCoin } = this.state;
    
    // axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=10`)
    // .then((response) => {
    //   //  console.log(response)
    //   this.setState({ currentPrice: response.data.Data })
    // })
    // .catch((error) => {
    //   console.log(`Fail to Fetch Data`, error)
    // })


    this.timerID = setInterval( () => 
    axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=10`)
    .then((response) => {
      // console.log(response.data.Data)
      this.setState({ currentPrice: response.data.Data })
    })
    .catch((error) => {
      console.log(`Fail to Fetch Data`, error)
    })
     , 8000 );
     
  }

  componentDidUpdate(prevProps, prevState) {
    // let { topTrendingCoin } = this.state;

    // this.timerID = setInterval( () => 
    // axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=10`)
    // .then((response) => {
    //   // console.log(response)
    //   this.setState({ currentPrice: response.data.Data })
    // })
    // .catch((error) => {
    //   console.log(`Fail to Fetch Data`, error)
    // })
    //  , 10000 );
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


    //  console.log(_.map(currentPrice))
    // let me = _.forEach(currentPrice, function(value, index) {
    //   console.log(value, index)
    //   // singleObjectCurrentTrendingCoinPrice.push(value)
    //   // singleObjectCurrentTrendingCoinName.push(index)
    // })
    // console.log(singleObjectCurrentTrendingCoinPrice)
    // console.log(singleObjectCurrentTrendingCoinName)

    // let trendingCoinLabel = []
    // let trendingUSD = []
    // let trendingEUR = []
    // let trendingJPY = []
    // singleObjectCurrentTrendingCoinName.map((value, index) => {
    //   // console.log(value, index)
    //   trendingCoinLabel.push(value)
    // })
    // singleObjectCurrentTrendingCoinPrice.map((value, index) => {
    //   console.log(value, index)
    //   trendingUSD.push(value.USD)
    //   trendingEUR.push(value.EUR)
    //   trendingJPY.push(value.JPY)
    // })
    // console.log(trendingCoinLabel)
    // console.log(trendingUSD, 'USD')
    // console.log(trendingEUR, 'EUR')
    // console.log(trendingJPY, 'JPY')


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
       
        {/* <CoinApi/> */}
          <Line  data={data} width="700" id='btcLineGraphBox' />
      </div>
     );
  }
}
 
export default TopTrendingCryptoCoin;