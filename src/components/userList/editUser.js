import React, { Component } from 'react';
import axios from 'axios';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userData: [],
      toggleEditButton: false,
      newName: '',
      newEmail: ''
     }

  }

  handleGetUser(id) {
    axios.get(`/api/user/${id}`)
    .then((response) => {
      // console.log(response)
      this.setState({ userData: response.data })
    })
  }

  handleChangeName(value) {
    this.setState({ newName: value })
  }

  handleChangeEmail(value) {
    this.setState({ newEmail: value })
  }
  
  postNewInfo(id) {
    let { newName } = this.state

    axios.put(`/api/user?id=${ id }&newname=${ newName }`)
    .then((response) => {
      console.log(response)
      // this.setState({ userData: response.data })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() { 
    let { userData } = this.state;

    let displayEditInfo =  userData.map((value, index) => {
      // console.log(value.user_firstname, index)
      return(
        <div>
          <p>Name</p>
          <input placeholder='New Name:' onChange={ (e) => this.handleChangeName(e.target.value) } ></input>
          <p>Email</p>
          <input placeholder='New Email:' onChange={ (e) => this.handleChangeEmail(e.target.value) } ></input>
          <button  onClick={ () => this.postNewInfo(this.props.handleGetUserID) } >Submit </button>
        </div>
      )
    });

    return ( 
      <div>
        <button color='success' 
                  style={ { height: '5px', paddingBottom: '20px' } } 
                  onClick={ () => { this.handleGetUser(this.props.handleGetUserID)
                                    // this.handleEditUser()
                  } } >Edit User
        </button>
        { displayEditInfo }
      </div>
     );
  }
}
 
export default EditUser;