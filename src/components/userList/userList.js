import React, { Component } from 'react'
import Profile from '../profile/profile';
import  { getUserData } from '../../ducks/userReducer';
import { connect } from 'react-redux';
import css from './user.css';

let _ = require('lodash');

class UserList extends Component {
  constructor(props) {
    super(props)

    // LOCAL STATE IF NEEDED
    this.state = {
      userData: []
    }
  }
  componentDidMount() {
    this.setState({ userData:  this.props.getUserData()  })
  } 


  render() { 
    let UserList = this.props.userData.data

    let displayUserList = _.map(UserList)                               // <-- _map FROM REDUCER
    console.log('diplayUserList', displayUserList);

    let displayList = displayUserList.map((value, index) => {         // <-- .map FROM RESULT OF _map
      console.log(value, index)
      return (
        <div key={index} className='userListBox'>
          <p>Name: {value.user_firstname} {value.user_lastname}</p>
          <p>Email: {value.user_email}</p>
          <p>Picture: {value.user_url}</p>
          <p>Fav coin: 'pending...toDo'</p>
          <button>History</button>
        </div>
      )
    })

    return ( 
      <div>
        <p>UserList Component</p>
        <Profile/>
        
        <input placeholder='BITCOIN Name'></input>
        { displayList }
      </div>
     );
  }
}

// INPORT USER REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const  mapStateToProps = (state) => ({ ...state.user  })

export default connect(mapStateToProps, { getUserData })(UserList);