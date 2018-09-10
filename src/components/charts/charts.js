import React, { Component } from 'react'
import Profile from '../profile/profile';



class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <p>Charts Component</p>
        <Profile/>
      </div>
     );
  }
}
 
export default Charts;