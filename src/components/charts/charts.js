import React, { Component } from 'react'
import Profile from '../profile/profile';
import { connect } from 'react-redux';
import {Doughnut, Pie, Bar} from 'react-chartjs-2';
import { getChartsData } from '../../ducks/chartsReducer';
import css from './charts.css'
var _ = require('lodash');

class Charts extends Component {
  constructor(props) {
    super(props);

      // LOCAL STATE IF NEEDED
      this.state = {
        bitcoinInfo: [],
        data2:  {
          labels: ['Ethereum (ETH)','Bitcoin Cash (BCH)','Ethereum Classic (ETC)', 'EOS (EOS)', 'Litecoin (LTC)','Dash (DASH)','Dogecoin (DOGE)','XRP (XRP)','NEO (NEO)','QTUM (QTUM)','ZCash (ZEC)','Stellar (XLM)','True Chain (TRUE)','BiboxCoin (BIX)','Bytom (BTM)','Monero (XMR)','Tronix (TRX)','Infinity Economics (XIN)','OmiseGo (OMG)','Waves (WAVES)'],
            datasets: [ 
              {
                data: [],
                backgroundColor: ['#FF6384','#36A2EB','#FFCE56', '#FFCE56', 'blue','#FF6384','#36A2EB','#FFCE56', '#FFCE56', 'blue','#FF6384','#36A2EB','#FFCE56', '#FFCE56', 'blue','#FF6384','#36A2EB','#FFCE56', '#FFCE56', 'blue'],
                hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56', '#FFCE56', 'blue']
              }
            ]
        }
      }


  }

  // GET DATA FROM REDUX AND STORE TO LOCAL STATE
  componentDidMount() {
    this.props.getChartsData().then((response) => {
        // console.log(response.value.data)
     this.setState({ bitcoinInfo:  response.value.data  })
    })

  } 

  getDataForBarGraph = () =>  {
    let chartsData = this.props.chartsbitcoinData.data
    console.log(chartsData)
  }


  render() { 

      // console.log(this.props.chartsbitcoinData.data)
      let chartsData = this.props.chartsbitcoinData.data
      let singleData =[]
      for(let key in chartsData) {
        // console.log(chartsData[key])
        this.state.data2.datasets[0].data.push(chartsData[key].bitcoin_volume24hourto)
      }
      console.log(chartsData)

    return ( 
      <div>
        <Profile/>
        
        <p>Charts Component</p>
        <Pie data={this.state.data2} />
      </div>
     );
  }
}

// IMPORT Charts REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const mapStateToProps = (state) => ({ ...state.charts })

export default connect(mapStateToProps, { getChartsData })  (Charts);