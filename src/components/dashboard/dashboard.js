import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinMarket from '../bitcoinMarket/bitcoinMarket';

import Weather from '../weather/weather';
import cryptoInfo from '../cryptoInfo/cryptoInfo';
import NavBarHeader from './navBarHeader'
import DashBoardNews from './dashboardNews';
import TopTrendingCryptoCoin from './toptrendingcrytocoin';
import ZecTrendingCrypto from './zecTrendingCrypto';
import EthTrendingCrypto from './ethTrendingCrypto';
import TopTrendingBTCPie from './topTrendingBTC';
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './dashboard.css'

class DashBoard extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() { 
     return ( 
      <div>
        <NavBarHeader/>
          <Col xs='8'>
            <TopTrendingCryptoCoin />
            <TopTrendingBTCPie  />
          </Col>
          
          <Col xs='8'>
            <ZecTrendingCrypto/>
          </Col>

          <Col xs='8'>
            <EthTrendingCrypto/>
          </Col>

          <Col xs='8'>
            <ZecTrendingCrypto/>
          </Col>

          <div className='missionSectionBox'>
            <p className="display-6 p-5">Mission</p>
            <p>Our vision is to make one central app to manage all your business solutions on one platform</p>
          </div>
           
          <DashBoardNews/>

      </div>
     );
  }
}
 
export default DashBoard;

