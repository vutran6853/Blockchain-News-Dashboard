import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinMarket from '../bitcoinMarket/bitcoinMarket';

import cryptoInfo from '../cryptoInfo/cryptoInfo';
import NavBarHeader from './navBarHeader'
import DashBoardNews from './dashboardNews';
import BtcTrendingCrypto from './btcTrendingCrypto';
import ZecTrendingCrypto from './zecTrendingCrypto';
import EthTrendingCrypto from './ethTrendingCrypto';
import TopTrendingBTCPie from './topTrendingBTC';
import TestTrendingCrypto from './testTrendingCrypto';
import BtcTrendingPrice from './btcTrendingPrice';
import EthTrendingPrice from './ethTrendingPrice';
import ZecTrendingPrice from './zecTrendingPrice';
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './dashboard.css'
import axios from 'axios';
class DashBoard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTrendingBTCPrice: [],
      currentTrendingETHPrice: [],
      currentTrendingZECPrice: [],
      NameTrendingPrice: ['BTC', 'ETH', 'ZEC'],
      displayTrendingPrice: []
    }
  }

  componentDidMount() {

    this.timerID = setInterval( () => 
    axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=GBP&limit=30`)
    .then((response) => {
      // console.log(response)
      this.setState({ currentTrendingETHPrice: response.data.Data })
    })
    .catch((error) => {
      console.log(`Fail to Fetch Data`, error)
    })
     , 1000 );
////////////////////////////////////////////////////////////////////////////////////////////////////
 
     this.timerID = setInterval( () => 
    axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=30`)
    .then((response) => {
      // console.log(response)
      this.setState({ currentTrendingBTCPrice: response.data.Data })
    })
    .catch((error) => {
      console.log(`Fail to Fetch Data`, error)
    })
     , 1000 );

////////////////////////////////////////////////////////////////////////////////////////////////////
    let { NameTrendingPrice } = this.state
    this.timerID = setInterval( () => 
    axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${NameTrendingPrice}&tsyms=USD,EUR,JPY`)
    .then((response) => {
      // console.log(response.data)
      this.setState({ displayTrendingPrice: response.data })
    })
    .catch((error) => {
      console.log('Fail to Fetch Data', error)
    })
    , 5000 );

  }
  
  render() { 
     return ( 
      <div>
        <NavBarHeader/>
          <div className='d-flex flex-row m-1'>
            <Col xs='8'>
              <BtcTrendingCrypto data={this.state.currentTrendingBTCPrice} />
            </Col>
            <Col xs='4'>
              <BtcTrendingPrice data={this.state.displayTrendingPrice}/>
            </Col>
          </div>
          
          <div className='d-flex flex-row'>
            <Col xs='8'>
            <EthTrendingCrypto data={this.state.currentTrendingETHPrice} />
            </Col>
            <Col xs='4'>
              <EthTrendingPrice data={this.state.displayTrendingPrice}/>
            </Col>
          </div>

          <div className='d-flex flex-row'>
            <Col xs='8'>
            <ZecTrendingCrypto />
            </Col>
            <Col xs='4'>
              <ZecTrendingPrice data={this.state.displayTrendingPrice}/>
            </Col>
          </div>

          <div className='missionSectionBox'>
            <p className="display-6 p-5">Our Mission</p>
            <p>Our vision is to make one central app to manage all your business solutions on one platform</p>
          </div>
           
          <DashBoardNews/>

      </div>
     );
  }
}
 
export default DashBoard;

