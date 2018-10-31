var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WeBlock X' });
});

router.get('/academy', function(req, res){
  res.render('academy', {title: 'WeBlock X Academy'})
})

router.get('/community', function(req, res){
  res.render('community', {title: 'WeBlock X Community'})
})

router.get('/')
module.exports = router;
