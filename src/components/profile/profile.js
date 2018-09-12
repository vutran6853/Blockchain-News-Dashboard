import React, { Component } from 'react';
import Axios from 'axios';
import css from './profile.css';
import { Link } from 'react-router-dom';

import { ListGroup, ListGroupItem, Button, Container } from 'reactstrap';


class ProfileUser extends Component {
  constructor(props) {
    super(props);

  
  }

  render() { 


    return ( 
      <div className='Container container'>
        
            <Link to='/'>
                    <Button>Home</Button>
                </Link>
            
              
              <Link to='/bitcoinNews'>
                    <Button>bitcoinNews</Button>
                    
                </Link>
            

              
              <Link to='/charts'>
                    <Button>charts</Button>
                </Link>
            

              
              <Link to='/userList'>
                    <Button>userList</Button>
                </Link>
            

              
              <Link to='/todoProject'>
                    <Button>todoProject</Button>
                </Link>
       

         
          
         

                    

      </div>
     );
  }
}
 
export default ProfileUser;