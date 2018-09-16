import React, { Component } from 'react';
import UserList from './userList';
import axios from 'axios';
import { Button, notification } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

class UserFavCoinList extends Component {
  constructor(props) {
    super(props);

    // LOCAL STATE IF NEEDED
    this.state = {
      favListData: [],
      allCoinListData: [],
      singleUserFavList: []
    }


  }


  
  notify = () => {

    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });

  }

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
      toast.error('Fail to remove Coin from list')
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
      console.log('value', value, 'index', index)
      return(
        <div className='favCoinListBox' >
          <p><strong>Name: </strong>{value.bitcoin_fullname}</p>
          <div className='imageBox'>
            <img src={value.bitcoin_imageurl}></img>
            <Button className='ant-btn-primary' 
                    onClick={() => {this.handleDeleteFavCoin(value.bitcoinlist_id,this.props.handleGetFavId)
                                    {this.notify}
                    }} >Delete Coin</Button>
          </div>
          
          <p><strong>Algorithm: </strong>{value.bitcoin_algorithm}</p>
         
        </div>
      )
    })
   

    
    return ( 
        <div className='userListMap' >
        <ToastContainer autoClose={1000} />
          <p>UserFavCoinList Component</p>
          <button onClick={ () => { this.handleGetFav(this.props.handleGetFavId);
                                   
                                  }} >Get Fav</button>
          <span >{displayFavCoinList}</span>
        </div>
     );
  }
}
 
export default UserFavCoinList;