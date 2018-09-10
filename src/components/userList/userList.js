import React, { Component } from 'react'
import Profile from '../profile/profile';



class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { 


     }
  }
    //  componentDidMount() {
    //    Axios.get('/api/user')
    //    .then((response) => {
    //      console.log(response)
    //    })
    //    .catch((error) => {
    //      console.log(`Danger!`, error)
    //    })
    //  };



  render() { 


    return ( 
      <div>
        <p>UserList Component</p>
        <Profile/>
      </div>
     );
  }
}
 
export default UserList;