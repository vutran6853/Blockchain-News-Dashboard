import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinNews from '../bitcoinNews/bitcoinNews';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import TodoProject from '../todoproject/todoproject';
import css from './dashboard.css';
import { Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import bitcoinNews from '../bitcoinNews/bitcoinNews';
import Example from './dashBoardTopCoin';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Container,Button } from 'reactstrap';

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

        <div>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">CyproZone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="offset-md-3 " navbar>
                <Link to='/'>
                  <ListGroupItem  action>
                    Home
                  </ListGroupItem>
                </Link>

               <Link to='/bitcoinNews'>
                  <ListGroupItem action>
                  bitcoinMarket
                  </ListGroupItem>
                </Link>

                <Link to='/charts'>
                  <ListGroupItem action>
                  CyproCharts
                  </ListGroupItem>
                </Link>

                <Link to='/userList'>
                  <ListGroupItem action>
                  CyproUser
                  </ListGroupItem>
                </Link>

                <Link to='/todoProject'>
                  <ListGroupItem action>
                  todoProject
                  </ListGroupItem>
                </Link>

            </Nav>
          </Collapse>
        </Navbar>
        </div> 
    );
  }
}
 
export default NavBarHeader;