import React, { Component } from 'react';
import Axios from 'axios';
import css from './profile.css';
import { Link } from 'react-router-dom';


class ProfileUser extends Component {
  constructor(props) {
    super(props);

    this.state = { 

     }



  }




  render() { 


    return ( 
      <div className='profileMenu'>
        <div>
        <p>Profile Component</p>

          <Link to='/bitcoinNews'>
            <button>News</button>
          </Link>
          <Link to='/charts'>
            <button>Charts</button>
          </Link>
          <Link to='/userList'>
            <button>UserList</button>
          </Link>
          <Link to='/todoProject'>
            <button>TodoProject</button>
          </Link>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
        
     
        
        

      </div>
     );
  }
}
 
export default ProfileUser;