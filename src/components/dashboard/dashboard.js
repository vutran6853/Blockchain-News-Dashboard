import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinMarket from '../bitcoinMarket/bitcoinMarket';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import cyproInfo from '../cyproInfo/cyproInfo';
import NavBarHeader from './navBarHeader'
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class DashBoard extends Component {
  constructor(props) {
    super(props);

    
  }
  
  render() { 
     return ( 
      <div>
        <NavBarHeader/>

          <Row>

            <Col xs="10">
              <Jumbotron>
                <h1 className="display-6">Top Trending CyptoCoin</h1>

              </Jumbotron>

              <Jumbotron>
                <h1 className="display-6">Weather Section</h1>
                <Weather/>
              </Jumbotron>

              <Jumbotron>
                <h1 className="display-3">TODo List</h1>  
              </Jumbotron>
            </Col>

          </Row>

      </div>
     );
  }
}
 
export default DashBoard;

