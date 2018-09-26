import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinMarket from '../bitcoinMarket/bitcoinMarket';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import cyproInfo from '../cyproInfo/cyproInfo';
import NavBarHeader from './navBarHeader'
import DashBoardNews from './dashboardNews';
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

          <Row >

            <Col xs="10" className='entireCol'>
              <Jumbotron>
                <h1 className="display-6">Top Trending CryptoCoin</h1>

              </Jumbotron>

              <Jumbotron>
                <h1 className="display-6">Weather Section</h1>
                <Weather/>
              </Jumbotron>

              <Jumbotron>
                <div className='header headerBox' >
                  <h3>CryptoZone is the perfect place to learn about crypto currencies and start to understand some of the fundamental concepts behind the blockchain.</h3>
                </div>
                <DashBoardNews/>
              </Jumbotron>
            </Col>

          </Row>

      </div>
     );
  }
}
 
export default DashBoard;

