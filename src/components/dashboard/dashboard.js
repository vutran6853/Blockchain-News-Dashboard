import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinNews from '../bitcoinNews/bitcoinNews';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import TodoProject from '../todoproject/todoproject';
import css from './dashboard.css';
import axios from 'axios';

// console.log(process.env.REACT_APP_WEATHER_API_KEY)
const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      weatherData: [],
      zipCode: ''
     }
     
     this.updateNewWeather = this.updateNewWeather.bind(this);

     
  }
  

  componentDidMount() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=78660,us&APPID=${WEATHER_KEY}`)
    .then((response) => {
      console.log(response)
      this.setState({ weatherData: response.data })
    })
    .catch((error) => {
      console.log(`Fail to get Weather Data`, error)
    })
  }

  updateNewWeather(zipCode) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${ this.state.zipCode },us&APPID=${WEATHER_KEY}`)
    .then((response) => {
      console.log(response)
       this.setState({ weatherData: response.data })

    })
    
  }
  
  renderWeather() {
    let renderWeather = this.state.weatherData.data;
    console.log(renderWeather)
    return(
      <div>
        
      </div>
    )

  }
  
  

  render() { 
      

    //  console.log(this.state.zipCode);

     return ( 
      <div>
        <p>DashBoard Component</p>
        <Profile/>
        <div className='bitcoinNew_box'>
          <p>bitcoinNew_box</p>
        </div>
        <div className='weather_box'>
          <p>Weather box</p>
          <input onChange={ (e) => this.setState({ zipCode: e.target.value })}></input>
          <button onClick={ () => this.updateNewWeather(this.state.zipCode) } >Search</button>
          <p>{this.renderWeather()}</p>
        </div>
        
      </div>
     );
  }
}
 
export default DashBoard;

