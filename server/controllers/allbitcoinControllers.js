let getBitcoinList = (req, res, next) => {

  const dbInstance = req.app.get('db');

  dbInstance.get_allBitcoinLst()
  .then((response) => {
    // console.log(response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Fail to request this data', error)
  })

}


let postBitcoinlistID = (req, res, next) => {
  // console.log(req)
  const dbInstance = req.app.get('db');
  
                                    //  POST DATA TO DATABASE
  dbInstance.post_BitcoinlistID([req.params.id, req.query.user_id ])
  .then((response) => {
    // console.log(response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Fail to POST this data', error)
  })
}

module.exports = {
  getBitcoinList,
  postBitcoinlistID
}