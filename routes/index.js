var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/flash', function(req,res){
  req.flash("age", 25);
  req.flash("name", "Manoj Chetry");
  res.send("Created flash message");
})

router.get('/check', function(req,res){
  console.log(req.flash("age"), req.flash("name"));
  res.send("Check");
})

module.exports = router;
