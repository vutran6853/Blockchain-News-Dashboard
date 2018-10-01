import React, { Component } from 'react';
import axios from 'axios';
import {Line } from 'react-chartjs-2';
import css from './dashboard.css'

class ZecTrendingPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHighPrice: []
    }

  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps, 'prevState', prevState )
    if(prevProps != this.props && prevProps.data.ZEC) {
      // console.log('true')
      let prevPropsData = prevProps.data.ZEC;
      let propsData = this.props.data.ZEC;
      // console.log('prevPropsData: ', prevPropsData)
      // console.log('propsData:', propsData)

      let prevPropsDataValue = []
      let propsDataValue = []
      for(let key in prevPropsData) {
        // console.log('prevPropsData: ', prevPropsData[key])
        // console.log('KEY: ', key)
        prevPropsDataValue.push(prevPropsData[key])
        propsDataValue.push(propsData[key])
      }
      // console.log('prevPropsDataValue: ', prevPropsDataValue)
      // console.log('propsDataValue: ', propsDataValue)

      let finalResult = [];
      for(let i = 0; i < prevPropsDataValue.length; i++) {
        if(propsDataValue[i] > prevPropsDataValue[i] ) {
          // console.log('HIGH','propsDataValue:', propsDataValue[i],'prevPropsDataValue: ', prevPropsDataValue[i])
          finalResult.push(true)
        } else if (propsDataValue[i] === prevPropsDataValue[i]) {
          // console.log('SAME', 'propsDataValue:',  propsDataValue[i], 'prevPropsDataValue: ', prevPropsDataValue[i])
          finalResult.push('')
        } else {
          // console.log('LOW','propsDataValue:',  propsDataValue[i], 'prevPropsDataValue: ',prevPropsDataValue[i])
          finalResult.push(false)
        
        }
        console.log(finalResult)
        this.setState({ isHighPrice: finalResult })
      }
    } else {
      // console.log('false')
    }
  }

  handlePriceChangeindex0(num) {
    // console.log('VALUE', num) 
    let { isHighPrice } = this.state
    // console.log(isHighPrice)
    for(let i = 0; i < isHighPrice.length; i++) {
      // console.log(isHighPrice[i])
      if(isHighPrice[i] === true) {
        // console.log('highPriceBox')
        return 'highPriceBox';

      } else if(isHighPrice[i] === false) {
        // console.log('lowPriceBox')
        return 'lowPriceBox'

      } else {
        // console.log('same')
        return ''
      }
     }

  }

  handlePriceChangeindex1(num) {
    // console.log('VALUE', num) 
    let { isHighPrice } = this.state
    // console.log(isHighPrice)
    for(let i = 1; i < isHighPrice.length; i++) {
      console.log('index', i, 'value:', isHighPrice[i])
      if(isHighPrice[i] === true) {
        // console.log('highPriceBox')
        return 'highPriceBox';

      } else if(isHighPrice[i] === false) {
        // console.log('lowPriceBox')
        return 'lowPriceBox'

      } else {
        // console.log('same')
        return ''
      }
    }
  }

  handlePriceChangeindex2(num) {
    // console.log('VALUE', num) 
    let { isHighPrice } = this.state
    // console.log(isHighPrice)
    for(let i = 2; i < isHighPrice.length; i++) {
      console.log('index', i, 'value:', isHighPrice[i])
      if(isHighPrice[i] === true) {
        // console.log('highPriceBox')
        return 'highPriceBox';

      } else if(isHighPrice[i] === false) {
        // console.log('lowPriceBox')
        return 'lowPriceBox'

      } else {
        // console.log('same')
        return ''
      }
    }
  }

  handleIronChange0(num) {
    let { isHighPrice } = this.state
    // console.log(isHighPrice)
    for(let i = 0; i < isHighPrice.length; i++) {
      console.log('index', i, 'value:', isHighPrice[i])
      if(isHighPrice[i] === true) {
        // console.log('highPriceBox')
        return 'arrow-up'

      } else if(isHighPrice[i] === false) {
        // console.log('lowPriceBox')
        return 'arrow-down'

      } else {
        // console.log('same')
        return ''
      }
    }
  }

  handleIronChange1(num) {
    let { isHighPrice } = this.state
    // console.log(isHighPrice)
    for(let i = 1; i < isHighPrice.length; i++) {
      console.log('index', i, 'value:', isHighPrice[i])
      if(isHighPrice[i] === true) {
        // console.log('highPriceBox')
        return 'arrow-up'

      } else if(isHighPrice[i] === false) {
        // console.log('lowPriceBox')
        return 'arrow-down'

      } else {
        // console.log('same')
        return ''
      }
    }
  }

  handleIronChange2(num) {
    let { isHighPrice } = this.state
    // console.log(isHighPrice)
    for(let i = 2; i < isHighPrice.length; i++) {
      console.log('index', i, 'value:', isHighPrice[i])
      if(isHighPrice[i] === true) {
        // console.log('highPriceBox')
        return 'arrow-up'

      } else if(isHighPrice[i] === false) {
        // console.log('lowPriceBox')
        return 'arrow-down'

      } else {
        // console.log('same')
        return ''
      }
    }
  }



  render() { 
    // console.log(this.props.data.displayTrendingPrice)
    let trendingCryptoZEC  = this.props.data;
      // console.log(trendingCryptoZEC.BTC)
    let singleObjectZEC = trendingCryptoZEC.ZEC
    
    let displayName = [];
    let displayZEC = []
    for(let key in singleObjectZEC) {
      // console.log(key, singleObjectZEC[key])
      displayName.push(key)
      displayZEC.push(singleObjectZEC[key])
    }
    // console.log(displayName, displayZEC)

    return ( 
      <div className='d-flex flex-column displayTrendingCoinBox'>
        <div>
          <span className={'coinapi' + this.handlePriceChangeindex0(displayZEC) } >{displayName[0]} $ : {displayZEC[0]}</span>
          <span className={this.handleIronChange0(displayZEC)} ></span>
        </div>

        <div>
          <span className={'coinapi' + this.handlePriceChangeindex1(displayZEC) } >{displayName[1]} € : {displayZEC[1]}</span>
          <span className={this.handleIronChange1(displayZEC)} ></span>
        </div>

        <div>
          <span className={'coinapi' + this.handlePriceChangeindex2(displayZEC)} >{displayName[2]} ¥ : {displayZEC[2]}</span>
          <span className={this.handleIronChange2(displayZEC)}></span>
        </div>

      </div>
     );
  }
}
 
export default ZecTrendingPrice;