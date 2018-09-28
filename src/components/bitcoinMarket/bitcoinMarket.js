import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBitcoinData, getSevenDayInfo } from '../../ducks/bitcoinNewReducer';
import { getAllCoinData, getBitcoinImageData } from '../../ducks/allBitcoinListReducer';
import axios from 'axios';
import { Table } from 'reactstrap';
import BitcoinMarketTableNav from './bitcoinMarketTableNav';
import { Icon, Switch, BackTop } from 'antd'
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
      allbitcoinImageArray: [],
      isHighPriceMap: [],
      id: 'Turn Lights On',
      current: 1
    }
    this.changeTheme = this.changeTheme.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
 
   this.timerID = setInterval( () => 
      this.props.getBitcoinData()
      .then((response) => {
        // console.log(response)
        this.setState({ allBitcoinPrice: response.value.data.DISPLAY })
      } )
     , 10000 );
   
    

    this.props.getBitcoinImageData()
    .then((response) => {
      this.setState({ allbitcoinImageArray: response.value.data ? response.value.data.map((value, index) => {
        return value.bitcoin_imageurl
       }) : null  })
    })
   
  }

  // GET PREVPRO AND PREVSTATE TO CHECK AND COMPARE DATA
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps != this.props && prevProps.bitcoinNew.bitcoinData.data) {
      let prevPropsData = prevProps.bitcoinNew.bitcoinData.data.RAW;
      let propsData = this.props.bitcoinNew.bitcoinData.data.RAW;

      //  console.log(prevPropsData)  
      //   console.log(currentStateData)

      let multMapPrevPropsData = _.map(prevPropsData)
      let multMapPropsData = _.map(propsData)
      // console.log(multMapPrevPropsData)
      // console.log(multMapPropsData)

      console.log('prevProps: ', multMapPrevPropsData[0].USD.PRICE)
      console.log('currrentProps: ', multMapPropsData[0].USD.PRICE)
      
      let singlePricePrevProps = []
      multMapPrevPropsData.map((value, index) => {
        // console.log(value.USD.PRICE, index)
        singlePricePrevProps.push(value.USD.PRICE)
      })
      // console.log(singlePricePrevProps)

      let singlePricePropsData = []
      multMapPropsData.map((value, index) => {
        // console.log(value.USD.PRICE, index)
        singlePricePropsData.push(value.USD.PRICE)
      })
      // console.log(singlePricePropsData)


      let test1 = []
      for(let i = 0; i < singlePricePrevProps.length; i++) {
      //  console.log('index',i , 'VALUE1:', singlePricePrevProps[i])
      //  console.log('index',i , 'VALUE2:', singlePricePropsData[i])
       if(singlePricePropsData[i] > singlePricePrevProps[i]) {
        //  console.log('TOO HIGH')
         test1.push(true)
         
        //  this.setState({ isHighPrice: '0' })
       } else if(singlePricePropsData[i] === singlePricePrevProps[i]) {
        //  console.log('TOO SAME')
         test1.push('')
        //  this.setState({ isSamePrice: '' })
       } else {
        //  console.log('TOO LOW')
         test1.push(false)
        //  this.setState({ isLowPrice: '1' })

       }
      }
       console.log(test1);
      this.setState({isHighPriceMap: test1});
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    } else {
      // console.log('FALSE')
    }
  }  

  findpicforlistcoin(fromsymbol) {
    let { allbitcoinImageArray } = this.state
    // console.log(allbitcoinImageArray)
    // console.log(fromsymbol)

    let fitlerimage = allbitcoinImageArray.forEach((element, index) => {
      // console.log(element.bitcoin_fullname.match(/\(([^()]+)\)/)['1'])
    })

  }

  handlePriceChange(num) {
    //  console.log('value.PRICE', num)
    let { isHighPriceMap } = this.state
    if(isHighPriceMap[num] === true) {
      return 'highPriceBox'
    } else if(isHighPriceMap[num] === false) {
      return 'lowPriceBox'
    }
    return ''
  }

  handleIronChange(num) {
    let { isHighPriceMap } = this.state
    if(isHighPriceMap[num] === true) {
      console.log('UP') 
      return 'arrow-up'
    } else if(isHighPriceMap[num] === false) {
      console.log('DOWN')
      return 'arrow-down'
    }
    return ''
  }

  changeTheme(value) {
    this.setState({ id: value ? 'Turn_Lights_On' : 'Turn_Lights_off' })
  }

  handleClick(e) {
    console.log('event')
    this.setState({ current: e.key })
  }

  render() {
    let { allBitcoinPrice } = this.state
    let { sevenDayBitcoinData } = this.state
    // console.log(this.state.allbitcoinImageArray)
    let { allbitcoinImageArray } = this.state

    let mapDisplay = _.map(allBitcoinPrice)
    //  console.log(mapDisplay)

    let mapImage = _.map(allbitcoinImageArray)
      // console.log(mapImage)

    let singleObjectCoinInfo = []             // <- ALL SINGLE OBJECT ARRAY STORE
    //  console.log(singleObjectCoinInfo) 
    let singleObjectImage = [] 

   let loopMainCyproList = mapDisplay.forEach((value, index) => {       // LOOP EACH OBJECT INTO SINGLE OBJECT
      singleObjectCoinInfo.push(value.USD)

    })

   let displayCyproList = singleObjectCoinInfo.map((value, index) => {
          // console.log('VALUE: ', value, 'INDEX: ', index)
            
      return(
        
        <tbody>
          <tr key={ index }>
            <td><strong>{ index }</strong></td>
            <td><img src={ this.state.allbitcoinImageArray[index] } ></img></td>
            <td>{ value.FROMSYMBOL }</td>
            <td>
              <span className={'priceBox ' + this.handlePriceChange(index)}
                    
              >{ value.PRICE }
                   
              </span>
              <span className={ this.handleIronChange(index) } ></span>
            </td>
            <td>{ value.HIGH24HOUR }</td>
            <td>{ value.LOWDAY }</td>
            <td>{ value.MKTCAP }</td>
            <td><span className='changeprice24Box' >{ value.CHANGEPCT24HOUR }%</span></td>
          </tr>
        </tbody>
       
      )
    })

    return ( 
      <div >
        

        <NavBarHeader/>

           <Table className='cryptoMarketTable m-0' responsive size="sm" bordered hover id={this.state.id} onClick={this.handleClick}   selectedKeys={[this.state.current]}  >
              <BitcoinMarketTableNav/>
                { displayCyproList }
          </Table>
          <div className='switchToggleBackgroundColor'>
              <Switch checked={this.state.id === 'Turn_Lights_On'}
                      onChange={this.changeTheme}
                      checkedChildren="Turn Lights On"
                      unCheckedChildren="Turn Lights off"/>
          
          </div>
          
      </div>
     );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getBitcoinData, getSevenDayInfo, getAllCoinData, getBitcoinImageData } )(BitcoinMarket);