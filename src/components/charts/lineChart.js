import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistoryCoinData } from '../../ducks/chartsReducer';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import css from './charts.css'

var _ = require('lodash');

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      allHistoryData: [],
      data: {
        labels: [],
        datasets: [
          {
            label: 'BITCOIN(BTC)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          }
        ]
      }
     }
  }

  componentDidMount() {
    axios.get('https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=alltime&?format=json')
    .then((response) => {
      this.setState({ allHistoryData: response.data.slice(247, 320) })
    })
  }

  sendBitcoinDataToSQL() {
    let { label } = this.state
    let { data } = this.state.data.datasets[0]
    console.log(label, data)
  }
  
  
  render() { 
    console.log(this.state)
    this.sendBitcoinDataToSQL()
    let { allHistoryData } = this.state;
    let { data } = this.state.data.datasets[0]
    let { labels } = this.state.data;

    for(let key in allHistoryData) {
      // console.log('VALUE: ', allHistoryData[key], 'KEY:', key)
      data.push(allHistoryData[key].high)
      labels.push(allHistoryData[key].time.replace(/\s\d\d\:\d\d\:\d\d/g, ''))
      data.sort()
      labels.sort()

    }

  
    
    return ( 
      <div className='lineBox'>
      <p className=' h3'>BITCOIN(BTC) High Point Ever in History of Cypro</p>

        <Line data={this.state.data} 
        width={2}
        height={1}
        
        
        />
      </div>
     );
  }
}


// IMPORT Charts REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const mapStateToProps = (state) => ({ ...state.charts })

export default connect(mapStateToProps, { getHistoryCoinData }) (LineChart);