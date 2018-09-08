require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const port = process.env.PORT || 3002;

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstace => {
  // console.log('Copy of dbInstace', dbInstace )
  app.set('db', dbInstace)
})
.catch(error => console.log('DANGER! : ', error));

app.use(json());

// ENDPOINT SET-UP
app.get('/api/test')

app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`);
});
