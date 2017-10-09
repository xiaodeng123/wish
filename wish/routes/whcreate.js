var express = require('express');
var router = express.Router();


//引入对应控制器模块
var whcreate = require('../controllers/whcreate')

router.get('/', whcreate.index);


module.exports = router;