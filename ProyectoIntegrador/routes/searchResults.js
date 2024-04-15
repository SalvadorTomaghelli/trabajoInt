var express = require('express');
var router = express.Router();
let searchResultsController = require('../controllers/searchResultsController')
router.get("/email",function(req,res,next){
    let email=req.query.email
    res.send(email) 
})
router.get('/', searchResultsController.searchResults);

module.exports = router;