let getUsers = (req, res, next) => {
  // console.log(req)
  const dbInstance = req.app.get('db');

  dbInstance.get_users()
  .then((response) => {
     console.log(response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.statue(500).send('Oop, Something have Happen unable to complete this request')
    // console.log(error);
  })

}

let getFavlist = (req, res, next) => {

  const dbInstance = req.app.get('db')

  dbInstance.get_Favlist(req.params.id)
  .then((response) => {
    console.log(response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have Happen unable to complete this request')
    // console.log(error);
  })


}

module.exports = {
  getUsers,
  getFavlist
}