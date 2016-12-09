var express = require('express');
var router = express.Router();
var pool = require('../public/javascripts/pool.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test');
});

router.post('/broadcast',function (req,res,next) {

  var b_id = req.body['b_id'];
  var m_id = req.body['m_id'];

  console.log(b_id +"a"+m_id);

  pool.getConnection(function (err,con) {

    con.query('select * from broadcast where b_id =? ', b_id ,function (err,result) {

      if(!err) {
        var broadcast = result[0];
        con.query('select * from member where m_id =? ',m_id,function (err,result){
          if(!err){
            var member = result[0];
            res.render('broadcastPage',{'broadcast': broadcast, "member": member });
          }else{
            console.log("2"+err);
          };
        });
      }else{
          console.log("1"+err);
      }
      con.release();
    });

  });




});

router.post('/view',function (req,res,next) {

  var b_id = req.body['b_id'];
  var m_id = req.body['m_id'];


  pool.getConnection(function (err,con) {

    con.query('select * from broadcast where b_id =? ', b_id ,function (err,result) {

      if(!err) {
        var broadcast = result[0];
        con.query('select * from member where m_id =? ',m_id,function (err,result){
          if(!err){
            var member = result[0];
            res.render('viewPage',{'broadcast': broadcast, "member": member });
          }else{
            console.log("2"+err);
          };
        });
      }else{
        console.log("1"+err);
      }
      con.release();
    });

  });



});

module.exports = router;
