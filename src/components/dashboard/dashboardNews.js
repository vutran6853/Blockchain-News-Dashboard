import React, { Component } from 'react';
import { defaults } from 'react-chartjs-2';
import axiso from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import css from './dashboard.css'

class DashBoardNews extends Component{
  constructor(props) {
    super(props)

    this.state = {
      cyproNews: [],
      cyproNews2: []
    }

  }
  componentDidMount() {
    axiso.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
    .then((response) => {
      // console.log(response)
      this.setState({ cyproNews: response.data.Data.splice(0, 8) })
     
    })
  }

  render() {
    let { cyproNews } = this.state
  // console.log(this.state)   
    let { Meta } = Card;

    let displayCyproNews = cyproNews.map((value, index) => {
      //  console.log('VALUE: ', value, 'INDEX: ', index)
      return(
        
          <Card id='card'>
            <a href={value.url} target="popup">
              <CardImg className='cardImg'  src={value.imageurl}/>
            </a>

            <CardBody>
              <a href={value.url} target="popup">
                <CardTitle className='cardTitleBox' >{value.title}</CardTitle>
              </a>
              <CardText className='cardbody'>{value.body}</CardText>
            </CardBody>
          </Card>
      
      )
    })

    return(
      <div className='mainBox'>
        
        <div className='header headerBox' >
            <p className="p-5">CryptoZone is the perfect place to learn about crypto currencies and start to understand some of the fundamental concepts behind the blockchain.</p>
        </div>
        
        <div className='container'>
        { displayCyproNews }

        </div>
      </div>
    )
  }
}

export default DashBoardNews;