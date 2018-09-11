import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinNews from '../bitcoinNews/bitcoinNews';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import TodoProject from '../todoproject/todoproject';
import css from './dashboard.css';
import axios from 'axios';
import { stringify } from 'querystring';

class DashBoard extends Component {
  constructor(props) {
    super(props);


  }

  render() { 


     return ( 
      <div>
        <p>DashBoard Component</p>
        <Profile/>
        <div className='bitcoinNew_box'>
          <p>bitcoinNew_box</p>
        </div>
        <Weather/>
       

      </div>
     );
  }
}
 
export default DashBoard;

