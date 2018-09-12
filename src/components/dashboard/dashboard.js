import React, { Component } from 'react'
import Charts from '../charts/charts';
import BitcoinNews from '../bitcoinNews/bitcoinNews';
import Profile from '../profile/profile';
import Weather from '../weather/weather';
import TodoProject from '../todoproject/todoproject';
import css from './dashboard.css';
import { Container, Row, Col, Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import bitcoinNews from '../bitcoinNews/bitcoinNews';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import Example from './dashBoardTopCoin';


class DashBoard extends Component {
  constructor(props) {
    super(props);

  }

  render() { 
     return ( 
      <div>
          <Row>
          <ListGroup>
                <Link to='/'>
                  <ListGroupItem active tag="button" action>
                    Home
                  </ListGroupItem>
                </Link>
                <Link to='/bitcoinNews'>
                  <ListGroupItem active tag="button" action>
                  bitcoinNews
                  </ListGroupItem>
                </Link>
                <Link to='/charts'>
                  <ListGroupItem active tag="button" action>
                  charts
                  </ListGroupItem>
                </Link>
                <Link to='/userList'>
                  <ListGroupItem active tag="button" action>
                  userList
                  </ListGroupItem>
                </Link>
                <Link to='/todoProject'>
                  <ListGroupItem active tag="button" action>
                  todoProject
                  </ListGroupItem>
                </Link>
            </ListGroup>

            <Col xs="10">
              <Jumbotron>
                <h1 className="display-6">Top Trending CyptoCoin</h1>

                 
                
              </Jumbotron>

              <Jumbotron>
                <h1 className="display-6">Weather Section</h1>
                <Weather/>
              </Jumbotron>

              <Jumbotron>
                <h1 className="display-3">TODo List</h1>  
              </Jumbotron>
            </Col>

          </Row>


      </div>
     );
  }
}
 
export default DashBoard;

