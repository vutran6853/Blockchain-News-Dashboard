import React, { Component } from 'react';
import Axios from 'axios';


class TopTrendingBTCPie extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  componentDidMount() {
    Axios.get('')
  }

  render() { 
  // console.log(this.state)
  // console.log(this.props)
    return ( 
      <div>
        <p>TopTrendingBTCPie</p>
      </div>
     );
  }
}
 
export default TopTrendingBTCPie;