var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test');
});

router.post('/broadcast',function (req,res,next) {
  console.log(req.body['b_key']);
  res.render('broadcastPage',{'key':req.body['b_key']})
})
module.exports = router;
