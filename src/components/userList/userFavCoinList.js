import React, { Component } from 'react';
import UserList from './userList';
import axios from 'axios';
import {  notification, Switch  } from 'antd';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class UserFavCoinList extends Component {
  constructor(props) {
    super(props);

    // LOCAL STATE IF NEEDED
    this.state = {
      favListData: [],
      allCoinListData: [],
      singleUserFavList: [],
      theme: 'dark',
      current: 1,
    }
  } 

  openNotification = () => {
    notification.open({
      message: 'Complete',
      description: `Remove Coin from  Fav List !` ,
    });
  };

  // GET FAVORITE COIN FROM USER ID
  handleGetFav(id) {
    console.log('INDEX: ', (id + 1))
    
    axios.get(`/api/user2/${id + 1}`)
    .then((response) => {
      console.log(response)
      this.setState({ favListData: response.data })
    })
  }


  // FUNCTION TO REMOVE COIN FROM UNIQUE USER   
  //  AND RENDER LOCAL STATE UPDATE LIST
  handleDeleteFavCoin(coinindex, userid ) {
    console.log('COIN INDEX: ', coinindex, 'USER INDEX: ', userid)
    axios.delete(`/api/favorite/${coinindex}/${userid + 1}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('Oh Fail to Delete', error)
      // toast.error('Fail to remove Coin from list')
    })

    axios.get(`/api/user2/${userid + 1}`)
    .then((response) => {
      console.log(response)
      this.setState({ favListData: response.data })
    })
  }

  render() { 

    // console.log(this.state.favListData)
    let { favListData } = this.state
    let displayFavCoinList = favListData.map((value, index) => {
      // console.log('value', value, 'index', index)
      return(
       
        <div className='favCoinListBox'>
          <p><strong>Name: </strong>{value.bitcoin_fullname}</p>
          <div className='imageBox'>
            <img src={value.bitcoin_imageurl}></img>
            <Button color="success" 
                    style={{height: '5px', paddingBottom: '20px' }}
                    onClick={() => {this.handleDeleteFavCoin(value.bitcoinlist_id,this.props.handleGetFavId)
                                    {this.openNotification()}
                    }}  >Delete Coin</Button>
          </div>
          <p><strong>Algorithm: </strong>{value.bitcoin_algorithm}</p>
        </div>

      )
    })
   

    return ( 
        <div className='userListMap'   >
       
          <Button color='success' style={{height: '5px', paddingBottom: '20px' }} onClick={ () => { this.handleGetFav(this.props.handleGetFavId)}} >Get Fav</Button>

          <span >{displayFavCoinList}</span>        
        </div>
     );
  }
}
 
export default UserFavCoinList;