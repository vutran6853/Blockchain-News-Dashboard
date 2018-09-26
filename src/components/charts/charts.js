import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getChartsData } from '../../ducks/chartsReducer';
import { getBitcoinData } from '../../ducks/bitcoinNewReducer';
import TopCoinChart from './horizontalChart';
import BitcoinVolume24 from './BitcoinVolume24';
import { Container, Row, Col,  DropdownMenu} from 'reactstrap';
import NavBarHeader from '../dashboard/navBarHeader';
import LineChart from './lineChart';
import css from './charts.css'

class Charts extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  render() { 

    return ( 
      <div>

        <NavBarHeader/>
          <Container>
            <Row>
              <Col>
                <LineChart/>
              </Col>
            </Row>
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