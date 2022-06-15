var express = require('express');
var router = express.Router();
const axios = require('axios');
const { dataFilter } = require('../util/dataUtils')

router.get('/', function(req, res) {
  // get query params from url
  const category = req.query.category || null
  const limit = req.query.limit || null
  let response
  axios.get('https://api.publicapis.org/entries').then((result) => {
    response = dataFilter(result.data, category, limit) // filet data
    res.send(response)
  }).catch((err) => {
    console.log(err)
  })
});

module.exports = router;
