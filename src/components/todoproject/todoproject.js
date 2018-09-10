import React, { Component } from 'react'
import Profile from '../profile/profile';


class ToDoProject extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <p>ToDoProject Component</p>
        <Profile/>
      </div>
     );
  }
}
 
export default ToDoProject;