import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCoinData } from '../../ducks/allBitcoinListReducer';
var _ = require('lodash');


class BitcoinImage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      allbitcoinImageArray: []
     }

  }

  componentDidMount() {
    this.props.getAllCoinData()
    .then((response) => {
        // console.log(response)
      this.setState({ allbitcoinImageArray: response.value.data.splice(0, 60)  })
    })
  }

  render() { 
    let { allbitcoinImageArray } = this.state
    let bitcoinImageArray = []
      console.log(bitcoinImageArray)
    for(let key in allbitcoinImageArray) {
      // console.log('VALUE: ', allbitcoinImageArray[key].bitcoin_imageurl, 'INDEX: ', key)
       bitcoinImageArray.push(allbitcoinImageArray[key].bitcoin_imageurl)
    }
    
    let displayImageBitcoin = bitcoinImageArray.map((value2, index) => {
      //  console.log(value2, index)
       
      return(
        <div key={value2}>
          <img src={value2}></img>
        </div>
      )
    })
    

    return ( 
      <div>
        { displayImageBitcoin }
      </div>
     );
  }
}

const mapStateToProps = (state) => ({ ...state.bitcoinData })

export default connect(mapStateToProps, { getAllCoinData })(BitcoinImage)