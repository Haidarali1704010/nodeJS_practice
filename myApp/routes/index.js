var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/list_all_foods',(req,res,next)=>{
  res.end("Get Requested => list_all_foods");
})

router.post("/insert_new_record",(req,res,next)=>{
  res.end("POST Requested => insert_new_record");
})

router.put("/update_a_record",(req,res,next)=>{
  res.end("PUT Requested => update_a_record");
})

router.delete("/delete_a_record",(req,res,next)=>{
  res.end("DELETE Requested => delete_a_record");
})

module.exports = router;
