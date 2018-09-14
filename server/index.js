require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();

let { getUsers, getFavlist } = require('./controllers/usersControllers');
let { getCharts } = require('./controllers/chartsControllers');
let { getBitcoinList, postBitcoinlistID } = require('./controllers/allbitcoinControllers');

// console.log(`weatherKey:`,process.env.REACT_APP_WEATHER_API_KEY)

app.use(cors())


//  MASSIVE CONNECT TO SQL SYSTEM FUNCTIONALITY
massive(process.env.CONNECTION_STRING)
.then(dbInstace => {
  // console.log('Copy of dbInstace', dbInstace )
  app.set('db', dbInstace)
})
.catch(error => console.log('DANGER! : ', error));


app.use(json());

// USER ENDPOINT SET-UP
app.get('/api/user', getUsers)
app.get('/api/user2/:id', getFavlist)


// CHARTS ENDPOINT SET-UP
app.get('/api/bitcoin', getCharts)

// ALLBITCOINLIST ENDPOINT SET-UP
app.get('/api/allbitcoinlist', getBitcoinList)


//
app.post('/api/favorite/:id', postBitcoinlistID)

















app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`);
});
