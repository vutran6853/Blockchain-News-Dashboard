import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBitcoinData } from '../../ducks/bitcoinNewReducer';
import { Switch, Button } from 'antd'; 
// import BitcoinMarketSwitchButton from './bitcoinMarket'
var _ = require('lodash');

class BitcoinMarketTableNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortBitcoinInfo: [],
      activeSortData: [],
    }
  }

  componentDidMount() {
    this.props.getBitcoinData()
    .then((response) => {
        // console.log(response)
      this.setState({ sortBitcoinInfo: response.value.data.DISPLAY })
      
    })

  }

  render() {

    return(
          <thead>
            <tr>
              <th><strong>#</strong></th>
              <th><strong>Pic</strong></th>
              <th><strong>COINS</strong></th>
              <th><strong>Price</strong></th>
              <th><strong>Change 24 Period</strong></th>
              <th><strong>Low Period</strong></th>
              <th><strong>Market Cap</strong></th>
              <th>
              
                <strong>Change 24Hour</strong>
                
              </th>
              {/* <th><BitcoinMarketSwitchButton/></th> */}
            </tr>
          </thead>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.bitcoinData })

export default connect(mapStateToProps, { getBitcoinData })(BitcoinMarketTableNav)