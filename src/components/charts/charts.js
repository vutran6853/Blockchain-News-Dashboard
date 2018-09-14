import React, { Component } from 'react'
import Profile from '../profile/profile';
import { connect } from 'react-redux';
import { getChartsData } from '../../ducks/chartsReducer';
import { getBitcoinData } from '../../ducks/bitcoinNewReducer';
import TopCoinChart from './horizontalChart';
import BitcoinVolume24 from './BitcoinVolume24';
import { Container, Row, Col } from 'reactstrap';
import NavBarHeader from '../dashboard/navBarHeader';

import css from './charts.css'

class Charts extends Component {
  constructor(props) {
    super(props);

      // LOCAL STATE IF NEEDED
      this.state = {
       
      }
      
  }


  render() { 

    return ( 


      <div>
        <NavBarHeader/>
          <Container>
          <p>Charts Component</p>
          <Row>
            <Col>
              <TopCoinChart/>
            </Col>
          </Row>
          <Row>
            <Col>
              <BitcoinVolume24/>
            </Col>
          </Row>
          
          
          </Container>
       
      </div>
     
     );
  }
}

// IMPORT Charts REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const mapStateToProps = (state) => ({ ...state.charts, ...state.bitcoinNew })

export default connect(mapStateToProps, { getChartsData, getBitcoinData })  (Charts);