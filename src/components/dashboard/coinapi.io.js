import React, { Component } from 'react';
import axios from 'axios';
import {Line } from 'react-chartjs-2';
import css from './dashboard.css'

class CoinApi extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        trendingCryptoBTC: []
     }
  }
  componentWillMount = () => {
    this.timerID = setInterval( () => 
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
    .then((response) => {
      console.log(response.data)
      this.setState({ trendingCryptoBTC: response.data })
    })
    .catch((error) => {
      console.log('Fail to Fetch Data', error)
    })
     , 10000 );

  }
  

  render() { 
    let { trendingCryptoBTC } = this.state;
     console.log(trendingCryptoBTC)

    return ( 
      <div  className='coinapiBTC'>
        {/* <Line  data={data} id='coinapiBTC' /> */}
        <p>USD: {trendingCryptoBTC.USD}</p>
        <p>JPY: {trendingCryptoBTC.JPY}</p>
        <p>EUR: {trendingCryptoBTC.EUR}</p>
      </div>
     );
  }
}
 
export default CoinApi;