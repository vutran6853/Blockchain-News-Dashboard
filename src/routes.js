import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/dashboard';
import BitcoinMarket from './components/bitcoinMarket/bitcoinMarket';
import Charts from './components/charts/charts';
import UserList from './components/userList/userList';
import CryptoInfo from './components/cryptoInfo/cryptoInfo';
import LoginPage from './components/Login_Signup/logingPage';
import SignUp from './components/Login_Signup/SignUpPage';

// import App from './App';

export default (
  <div>

    <Switch>
      <Route exact path='/' component={ DashBoard } ></Route>

      <Route path='/bitcoinMarket' component={ BitcoinMarket } ></Route>
      <Route path='/charts' component={ Charts } ></Route>
      <Route path='/userList' component={ UserList } ></Route>
      <Route path='/cryptoInfo' component={ CryptoInfo } ></Route>  
      <Route path='/LoginSignUp' component={ LoginPage } ></Route>
      <Route path='/SignUp' component={ SignUp } ></Route>
    </Switch>

  </div>
)

