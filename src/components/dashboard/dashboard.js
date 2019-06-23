import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import DashBoardNews from './DashBoardNews';
import BtcTrendingCrypto from './BtcTrendingCrypto';
import ZecTrendingCrypto from './ZecTrendingCrypto';
import EthTrendingCrypto from './EthTrendingCrypto';
import BtcTrendingPrice from './BtcTrendingPrice';
import EthTrendingPrice from './EthTrendingPrice';
import ZecTrendingPrice from './ZecTrendingPrice';
import { Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
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
    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=GBP&limit=30')
    .then((response) => this.setState({ currentTrendingETHPrice: response.data.Data }))
    .catch((error) => console.log(`Fail to Fetch Data ${ error }`))
     , 1000);
    ////////////////////////////////////////////////////////////////////////////////////////////////////
 
    this.timerID = setInterval( () => 
    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=30')
    .then((response) => this.setState({ currentTrendingBTCPrice: response.data.Data }))
    .catch((error) => console.log(`Fail to Fetch Data ${ error }`))
     , 1000);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    let { NameTrendingPrice } = this.state
    
    this.timerID = setInterval( () => 
    axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${ NameTrendingPrice }&tsyms=USD,EUR,JPY`)
    .then((response) => this.setState({ displayTrendingPrice: response.data }))
    .catch((error) => console.log('Fail to Fetch Data', error))
    , 6000);

  }
  
  render() {
     return ( 
      <div>
        {/* <Navbar/> */}
          <div className='d-flex flex-row m-1'>
            <Col xs='8'>
              <BtcTrendingCrypto data={ this.state.currentTrendingBTCPrice }/>
            </Col>
            <Col xs='4'>
              <BtcTrendingPrice data={ this.state.displayTrendingPrice }/>
            </Col>
          </div>
          
          <div className='d-flex flex-row'>
            <Col xs='8'>
              <EthTrendingCrypto data={ this.state.currentTrendingETHPrice } />
            </Col>
            <Col xs='4'>
              <EthTrendingPrice data={ this.state.displayTrendingPrice }/>
            </Col>
          </div>

          <div className='d-flex flex-row'>
            <Col xs='8'>
              {/* <ZecTrendingCrypto/> */}
            </Col>
            <Col xs='4'>
              <ZecTrendingPrice data={ this.state.displayTrendingPrice }/>
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

