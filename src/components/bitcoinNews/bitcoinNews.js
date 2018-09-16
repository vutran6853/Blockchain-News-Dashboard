import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import css from '../profile/profile.css'
import Profile from '../profile/profile';
import { connect } from 'react-redux';
import { getBitcoinData } from '../../ducks/bitcoinNewReducer';
import axios from 'axios';
// import csss from './bitcoinNews.css'
import css from '../../../node_modules/bootstrap/dist/css/bootstrap.css'


import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col,CardGroup } from 'reactstrap';
import NavBarHeader from '../dashboard/navBarHeader';
var _ = require('lodash');


class BitcoinNews extends Component {
  constructor(props) {
    super(props);

    // INITIAL LOCAL STATE IF NEEDED
    this.state = {
      allBitcoinPrice: []
    }
  }

  componentWillMount() {
    this.setState({ allBitcoinPrice: this.props.getBitcoinData() })
  }

 


  render() {
    let bitcoinData = this.props.bitcoinNew.bitcoinData.data
    //  console.log(this.props.bitcoinNew.bitcoinData.data)
    //  console.log(_.map(bitcoinData))
    let displayLayerBitcoinData = _.map(bitcoinData)
    //  console.log(_.map(displayLayerBitcoinData[1]))
    let zeroLayerBitcoinData = _.map(displayLayerBitcoinData[1])

    let final =  zeroLayerBitcoinData.map((value, index) => {
      // console.log('VALUE', value.USD, 'INDEX', index)
      return(
        <div className='bitcoinMarket'>
          <CardGroup>

            <Card>
              <CardImg  className/>
              <CardBody>
                <CardTitle>{value.USD.FROMSYMBOL}</CardTitle>
                <CardText>
                  <p>CoinName: {value.USD.FROMSYMBOL}</p>
                  <p>PRICE: {value.USD.PRICE}</p>
                  {/* <p>SYMBOL: {value.USD.TOSYMBOL}</p> */}
                  <p>HIGH24: {value.USD.HIGH24HOUR}</p>
                </CardText>
                <Button className='btn' >FAV</Button>
              </CardBody>
            </Card>
          
          </CardGroup>

         
          {/* <p>CoinName: {value.USD.FROMSYMBOL}</p>
          <p>PRICE: {value.USD.PRICE}</p>
          <p>SYMBOL: {value.USD.TOSYMBOL}</p>
          <p>HIGH24: {value.USD.HIGH24HOUR}</p> */}
        </div>
      )
    })
    

    return ( 
      <div>
        <NavBarHeader/>
        <p>BitcoinNews Component</p>

        
        {final}
      </div>
     );
  }
}

function mapStateToProps(state) {
  return state
}


 
export default connect(mapStateToProps, { getBitcoinData } )(BitcoinNews);