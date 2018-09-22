import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBitcoinData, getSevenDayInfo } from '../../ducks/bitcoinNewReducer';
import { getAllCoinData } from '../../ducks/allBitcoinListReducer';
import axios from 'axios';
import { Table } from 'reactstrap';
import BitcoinMarketTableNav from './bitcoinMarketTableNav';
import BitcoinImage from './bitcoinImage';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col,CardGroup } from 'reactstrap';
import NavBarHeader from '../dashboard/navBarHeader';
import css from './bitcoinMarket.css';

var _ = require('lodash');


class BitcoinMarket extends Component {
  constructor(props) {
    super(props);

    // INITIAL LOCAL STATE IF NEEDED
    this.state = {
      allBitcoinPrice: [],
      singleObjectArrayBitcoinInfo: [],
      sevenDayBitcoinData: [],
    

    }
  }

  componentDidMount() {
    let { topTrendCoin } = this.state;
    // setInterval(() => {
      this.props.getBitcoinData()
      .then((response) => {
        // console.log(response)
        this.setState({ allBitcoinPrice: response.value.data.DISPLAY })
      
      })
    // }, 10000)
      
    this.props.getSevenDayInfo()
    .then((response) => {
        // console.log(response.value.data.Data)
      this.setState({ sevenDayBitcoinData: response.value.data.Data })
    })
   
  }

  render() {
    let { allBitcoinPrice } = this.state
    let { sevenDayBitcoinData } = this.state
    
    let mapDisplay = _.map(allBitcoinPrice)
    // console.log(mapDisplay)

    let singleObjectCoinInfo = []             // <- ALL SINGLE OBJECT ARRAY STORE
    //  console.log(singleObjectCoinInfo)  

   let loopMainCyproList = mapDisplay.forEach((value, index) => {       // LOOP EACH OBJECT INTO SINGLE OBJECT
      singleObjectCoinInfo.push(value.USD)
    })
    // console.log(singleObjectCoinInfo)
 
   let displayCyproList = singleObjectCoinInfo.map((value, index) => {
        //  console.log('VALUE: ', value, 'INDEX: ', index)
    
      return(

        <tbody>
          <tr key={ index }>
            <td><strong>{ index }</strong></td>
            <td></td>
            <td>{ value.FROMSYMBOL }</td>
            <td><span className='priceBox'>{ value.PRICE }</span></td>
            <td>{ value.HIGH24HOUR }</td>
            <td>{ value.LOWDAY }</td>
            <td>{ value.MKTCAP }</td>
            <td><span className='changeprice24Box'>{ value.CHANGEPCT24HOUR }%</span></td>
          </tr>
        </tbody>

      )
    })

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

   
     


    return ( 
      <div>
        <NavBarHeader/>
        
        
        <Table bordered hover >
          <BitcoinMarketTableNav/>
          { displayCyproList }
          <BitcoinImage/>
      
        </Table>     

      </div>
     );
  }
}

function mapStateToProps(state) {
  return state
}


 
export default connect(mapStateToProps, { getBitcoinData, getSevenDayInfo, getAllCoinData } )(BitcoinMarket);