import React, { Component } from 'react'
import  { getUserData } from '../../ducks/userReducer';
import { getAllCoinData } from '../../ducks/allBitcoinListReducer';
import { connect } from 'react-redux';
import css from './user.css';
import NavBarHeader from '../dashboard/navBarHeader';
import axios from 'axios';
import UserFavCoinList from './userListMap';
import { displayFavCoinList } from './userListMap';

let _ = require('lodash');

class UserList extends Component {
  constructor(props) {
    super(props)

    // LOCAL STATE IF NEEDED
    this.state = {
      userData: [],
      allCoinListData: [],
      favListData: []
    }

  }

  componentDidMount() {
    this.setState({ userData:  this.props.getUserData() })

    this.props.getAllCoinData()
    .then((response) => {
      // console.log(response)
      this.setState({ allCoinListData: this.props.getAllCoinData() })
    })

  } 

  // handleGetFav(id) {
  //   console.log('INDEX: ', (id + 1))
    
  //   axios.get(`/api/user2/${id + 1}`)
  //   .then((response) => {
  //     console.log(response)
  //     this.setState({ favListData: response.data })
  //   })
  // }

  


  render() { 
    // console.log(this.props)
    // let favList = this.state.favListData
    // let displayfavList = favList.map((value, index) => {
    //   console.log(value, index)
    //   return(
    //     <div>
    //       <img src={value.bitcoin_imageurl}></img>
    //     </div>
    //   )
    // })



    let UserList = this.props.userData.data
    let displayUserList = _.map(UserList)                               // <-- _map FROM REDUCER

    let displayList = displayUserList.map((value, index) => {         // <-- .map FROM RESULT OF _map
      // console.log(value, index)

      return (
        <div key={index} className='userListBox'>
          <p><strong>Name: </strong>   {value.user_firstname} {value.user_lastname}</p>
          <p><strong>Email: </strong> {value.user_email}</p>
          <p><strong>Picture: </strong> {value.user_url}</p>
          <p><strong>Fav coin: </strong> 'pending...toDo'</p>
          {/* <button onClick={ () => { this.handleGetFav(index);
                                   
          }} >Get Fav</button> */}
        
          <UserFavCoinList handleGetFavId={index}  />

        </div>
      )
    })

    return ( 
      <div>
        <p>UserList Component</p>
        <NavBarHeader/>
        
       
        { displayList }
      </div>
     );
  }
}

// IMPORT USER REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const  mapStateToProps = (state) => ({ ...state.user, ...state.allCoinListData })

export default connect(mapStateToProps, { getUserData, getAllCoinData })(UserList);