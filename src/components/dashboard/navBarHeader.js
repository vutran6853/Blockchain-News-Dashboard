import React, { Component } from 'react'
import Charts from '../charts/charts';
import bitcoinMarket from '../bitcoinMarket/bitcoinMarket';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import cryptoInfo from '../cryptoInfo/cryptoInfo';

import { Link } from 'react-router-dom';
// import Example from './dashBoardTopCoin';
import image from './cryptozone1.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav, ListGroupItem } from 'reactstrap';
import css from './dashboard.css';
class NavBarHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() { 
    
    return ( 

     
          <Navbar className='body1'  light expand="md">
          <NavbarBrand href="/">
            <img src={image} style={{'width': '70px', 'height': '70px'}} ></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="offset-md-1" navbar>
                <Link to='/'>
                  <ListGroupItem  action  className='body1'>
                    Home
                  </ListGroupItem>
                </Link>

                <Link to='/bitcoinMarket'>
                  <ListGroupItem action  className='body1'>
                    CryptoMarket
                  </ListGroupItem>
                </Link>

                <Link to='/charts'>
                  <ListGroupItem action  className='body1'>
                    CryptoCharts
                  </ListGroupItem>
                </Link>

                <Link to='/userList'>
                  <ListGroupItem action  className='body1'>
                    CryptoUser
                  </ListGroupItem>
                </Link>

                <Link to='/cryptoInfo'>
                  <ListGroupItem action  className='body1'>
                    CryptoInfo
                  </ListGroupItem>
                </Link>
                
                <Link to='/LoginSignUp'>
                  <ListGroupItem action  className='body1'>
                    Login/SignUp
                  </ListGroupItem>
                </Link>

              </Nav>
            </Collapse>
          </Navbar>
        
    );
  }
}
 
export default NavBarHeader;