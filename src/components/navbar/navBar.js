import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image from '../dashboard/cryptozone1.png'
import './navBar.css';

class NavBarHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      navbarItem: ['Home', 'CryptoMarket', 'CryptoCharts', 'CryptoUser', 'CryptoInfo', 'Login/SignUp'],
      routeItem: ['/', 'bitcoinMarket', 'charts', 'userList', 'cryptoInfo', 'LoginSignUp']
    };
  }

  render() {
    let { navbarItem, routeItem } = this.state;

    let displayNavBar = navbarItem.map((value, index) => {
      return (
        <Link key={ index } to={ `${ routeItem[index] }` }>
          { value }
        </Link>
      )
    })
  
    return (
        <div className="navBar-container">
          <div id='logo1'>
            <img src={ image } ></img>
          </div>
          { displayNavBar }
        </div>
    );
  }
}
 
export default NavBarHeader;