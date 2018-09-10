import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/dashboard';
import BitcoinNews from './components/bitcoinNews/bitcoinNews';
import Charts from './components/charts/charts';
import UserList from './components/userList/userList';
import TodoProject from './components/todoproject/todoproject';

// import App from './App';

export default (
  <div>

    <Switch>
      <Route exact path='/' component={ DashBoard } ></Route>

      {/* <Route path='/dashboard' component={ DashBoard } ></Route> */}

      <Route path='/bitcoinNews' component={ BitcoinNews } ></Route>
      <Route path='/charts' component={ Charts } ></Route>
      <Route path='/userList' component={ UserList } ></Route>
      <Route path='/todoProject' component={ TodoProject } ></Route>  
    </Switch>

  </div>
)

