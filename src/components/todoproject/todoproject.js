import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllCoinData } from '../../ducks/allBitcoinListReducer';
import css from './todoProject.css'
import { Card, Button, message, Popover, Rate  } from 'antd';
import NavBarHeader from '../dashboard/navBarHeader';
import axios from 'axios';

class ToDoProject extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      allCoinListData: [],
      modal: false,
      favoriteID: [],
    
     }

     this.handelChange = this.handelChange.bind(this);
  }
  
  
  
  // GET DATA FROM REDUX AND STORE TO LOCAL STATE
  componentDidMount() {
    this.props.getAllCoinData()
    .then((response) => {
      // console.log(response)
      this.setState({ allCoinListData: response.value.data })
    })
  }

  // POPUP MESSAGE WHEN USER CLICK ON FAV
  info() {
    message.info('Add to Fav List ^.^')
  }

  handleChangeStar(value) {
    this.setState({ valueOfStar: value })
  }

  // POST ID TO FAVORITE DB
  handelChange(id) {
    console.log('INDEX', id)
    axios.post(`/api/favorite/${id}`)
    .then((response) => {
      // console.log(response)
    })
  }
  

  

  render() {
    let { allCoinListData } = this.state 
    //  console.log(allCoinListData)
    let { Meta } = Card;
    console.log(this.state.favoriteID)
    

    


    let displayCoinList = allCoinListData.map((value, index) => {
      let content = (
        <div>
          <p><strong>Description: </strong> {value.bitcoin_description}</p>
          <p><strong>Algorithm: </strong> {value.bitcoin_algorithm}</p>
        </div>
      )
      // console.log(value, index)
      return(
        <div className='coinListBox' key={ value.id }>
          <Card hoverable
                style={{ width: 270, height: 290, padding: 10} }
                cover={<img alt={value.bitcoin_fullname} src={value.bitcoin_imageurl} style={{ width: 210, height: 190} } />}>
            <Meta title={value.bitcoin_fullname}
                  description=''/>
          
            <Button style={{ margin: 3} } 
                    type='dashed' 
                    onClick={ () => { this.info();
                                      this.handelChange(index);
                            
                            
                            } }>Add to Fav </Button>
            
            <Popover content={ content } title={value.bitcoin_fullname}>
              <Button >More Info</Button>
            </Popover>
            
            
             
            
          </Card>
       
        </div>
      )
    })

    return ( 
     
      <div>
        <NavBarHeader/>

       
        { displayCoinList }
      </div>
     );
  }
}

 
// IMPORT Charts REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const mapStateToProps = (state) => ({ ...state.allCoinList })

export default connect(mapStateToProps, { getAllCoinData }) (ToDoProject);