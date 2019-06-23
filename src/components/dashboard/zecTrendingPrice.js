import React, { Component } from 'react';
import './dashboard.css';

class ZecTrendingPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHighPrice: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps != this.props && prevProps.data.ZEC) {
      let prevPropsData = prevProps.data.ZEC;
      let propsData = this.props.data.ZEC;
      let prevPropsDataValue = []
      let propsDataValue = [];
      
      for(let key in prevPropsData) {
        prevPropsDataValue.push(prevPropsData[key])
        propsDataValue.push(propsData[key])
      }

      let finalResult = [];

      for(let i = 0; i < prevPropsDataValue.length; i++) {
        if(propsDataValue[i] > prevPropsDataValue[i] ) {
          finalResult.push(true)
        } else if (propsDataValue[i] === prevPropsDataValue[i]) {
          finalResult.push('')
        } else {
          finalResult.push(false)        
        }
        this.setState({ isHighPrice: finalResult })
      }
    } else {
      // console.log('false')
    }
  }

  handlePriceChangeindex0(num) {
    let { isHighPrice } = this.state;

    for(let i = 0; i < isHighPrice.length; i++) {
      if(isHighPrice[i] === true) {
        return 'highPriceBox';
      } else if(isHighPrice[i] === false) {
        return 'lowPriceBox'
      } else {
        return ''
      }
     }
  }

  handlePriceChangeindex1(num) {
    let { isHighPrice } = this.state;

    for(let i = 1; i < isHighPrice.length; i++) {
      if(isHighPrice[i] === true) {
        return 'highPriceBox';
      } else if(isHighPrice[i] === false) {
        return 'lowPriceBox'
      } else {
        return ''
      }
    }
  }

  handlePriceChangeindex2(num) {
    let { isHighPrice } = this.state;

    for(let i = 2; i < isHighPrice.length; i++) {
      if(isHighPrice[i] === true) {
        return 'highPriceBox';
      } else if(isHighPrice[i] === false) {
        return 'lowPriceBox'
      } else {
        return ''
      }
    }
  }

  handleIronChange0(num) {
    let { isHighPrice } = this.state;

    for(let i = 0; i < isHighPrice.length; i++) {
      if(isHighPrice[i] === true) {
        return 'arrow-up'
      } else if(isHighPrice[i] === false) {
        return 'arrow-down'
      } else {
        return ''
      }
    }
  }

  handleIronChange1(num) {
    let { isHighPrice } = this.state;

    for(let i = 1; i < isHighPrice.length; i++) {
      if(isHighPrice[i] === true) {
        return 'arrow-up'
      } else if(isHighPrice[i] === false) {
        return 'arrow-down'
      } else {
        return ''
      }
    }
  }

  handleIronChange2(num) {
    let { isHighPrice } = this.state;

    for(let i = 2; i < isHighPrice.length; i++) {
      if(isHighPrice[i] === true) {
        return 'arrow-up'
      } else if(isHighPrice[i] === false) {
        return 'arrow-down'
      } else {
        return ''
      }
    }
  }

  render() { 
    let trendingCryptoZEC  = this.props.data;
    let singleObjectZEC = trendingCryptoZEC.ZEC;
    let displayName = [];
    let displayZEC = [];

    for(let key in singleObjectZEC) {
      displayName.push(key)
      displayZEC.push(singleObjectZEC[key])
    }

    return ( 
      <div className='d-flex flex-column displayTrendingCoinBox'>
        <div>
          <span className={ 'coinapi' + this.handlePriceChangeindex0(displayZEC) } >{ displayName[0] } $ : { displayZEC[0] }</span>
          <span className={ this.handleIronChange0(displayZEC) } ></span>
        </div>

        <div>
          <span className={ 'coinapi' + this.handlePriceChangeindex1(displayZEC) } >{ displayName[1] } € : { displayZEC[1] }</span>
          <span className={ this.handleIronChange1(displayZEC) } ></span>
        </div>

        <div>
          <span className={ 'coinapi' + this.handlePriceChangeindex2(displayZEC) } >{ displayName[2] } ¥ : { displayZEC[2] }</span>
          <span className={ this.handleIronChange2(displayZEC) }></span>
        </div>

      </div>
     );
  }
}
 
export default ZecTrendingPrice;