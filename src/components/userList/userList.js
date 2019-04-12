import React, { Component } from 'react'
import { getUserData } from '../../ducks/userReducer';
import { getAllCoinData } from '../../ducks/allBitcoinListReducer';
import { connect } from 'react-redux';
import './user.css';
import NavBarHeader from '../dashboard/navBarHeader';
import UserFavCoinList from './userFavCoinList';
import { Table } from 'reactstrap';
import EditUser from './editUser';

let lodash = require('lodash');

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
    .then((response) => this.setState({ allCoinListData: this.props.getAllCoinData() }))
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
    let UserList = this.props.userData.data
    let displayUserList = lodash.map(UserList)                               // <-- _map FROM REDUCER

    let displayList = displayUserList.map((value, index) => {         // <-- .map FROM RESULT OF _map
      // console.log(value, index)
      return (
         <tbody key={ value.user_id } className='userListBox'>
            <tr>
              <th scope="row">{ value.user_id }</th>
              <td><img src={ value.user_url } ></img></td>
              <td>{ value.user_firstname } { value.user_lastname }</td>
              <td>{ value.user_email }</td>
              <UserFavCoinList handleGetFavId={ value.user_id }  />
              <EditUser handleGetUserID={ value.user_id } />
            </tr>
          </tbody>
      )
    });

    return ( 
      <div>
        <NavBarHeader/>
          <Table bordered >
            <thead>
              <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Fav List</th>
              </tr>
            </thead>
            { displayList }
          </Table>
      </div>
     );
  }
}

// IMPORT USER REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const  mapStateToProps = (state) => ({ ...state.user, ...state.allCoinListData })

export default connect(mapStateToProps, { getUserData, getAllCoinData })(UserList);