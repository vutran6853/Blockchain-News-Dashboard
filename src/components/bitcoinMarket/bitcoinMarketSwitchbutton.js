import { Icon, Switch } from 'antd'
import React, { component } from 'react';
import css from './bitcoinMarket.css';

class BitcoinMarketSwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: 'Test1',
      current: 1
     }

     this.changeTheme = this.changeTheme.bind(this);
     this.handleClick = this.handleClick.bind(this);

  }

  changeTheme(value) {
    this.setState({ id: value ? 'Test1' : 'Test2' })
  }

  handleClick(e) {
    console.log('event')
    this.setState({ current: e.key })
  }



  render() { 
    return ( 
      // <div id={this.state.id} onClick={this.handleClick}   selectedKeys={[this.state.current]} >
      //    <Switch
      //     checked={this.state.id === 'Test1'}
      //     onChange={this.changeTheme}
      //     checkedChildren="Test2"
      //     unCheckedChildren="Test1"
      //   />
      // </div>
     );
  }
}
 
export default BitcoinMarketSwitchButton;