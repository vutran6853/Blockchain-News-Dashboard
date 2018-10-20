import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllCoinData } from '../../ducks/allBitcoinListReducer';
import css from './cryptoInfo.css'
import { Card, Button, Popover, notification, BackTop, Icon } from 'antd';
import NavBarHeader from '../dashboard/navBarHeader';
import axios from 'axios';


    

class CryptoInfo extends Component {
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

  handleChangeStar(value) {
    this.setState({ valueOfStar: value })
  }

  // POST ID TO FAVORITE DB
  handelChange(id) {
    console.log('INDEX', id)
    axios.post(`/api/favorite/${id}/1`)
    .then((response) => {
      // console.log(response)
    })
  }

  openNotification = () => {
    notification.open({
      message: 'Complete',
      description: 'Add to Fav List ^.^',
    });
  };

  

   


  render() {

  

    let { allCoinListData } = this.state 
    //  console.log(allCoinListData)
    let { Meta } = Card;
    // console.log(this.state.favoriteID)

    let displayCoinList = allCoinListData.map((value, index) => {
      let content = (
        <div>
          <p><strong>Description: </strong> {value.bitcoin_description}</p>
          <p><strong>Algorithm: </strong> {value.bitcoin_algorithm}</p>
        </div>
      )
      // console.log(value, index)
      return(
        <div className='coinListBox' id="coinBox" key={ value.id }>
            <Card 
                style={{ width: 270, height: 290, padding: 10} }
                cover={<img alt={value.bitcoin_fullname} id='hoverImage'  src={value.bitcoin_imageurl} style={{ width: 210, height: 190} } />}>
            <Meta title={value.bitcoin_fullname}/>
          
            <Button style={{ margin: 3} } 
                    type='dashed' 
                    onClick={ () => { this.handelChange(index);
                                      this.openNotification()
                            } }>Add to Fav</Button>

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

        <BackTop></BackTop>
      </div>
     );
  }
}

 
// IMPORT Charts REDUCER SINCE WE HAVE MULT REDUCER SET-UP
const mapStateToProps = (state) => ({ ...state.allCoinList })

export default connect(mapStateToProps, { getAllCoinData }) (CryptoInfo);