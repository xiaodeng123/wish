var express = require('express');
var router = express.Router();


//引入对应控制器模块
var whmore = require('../controllers/whmore')

router.get('/', whmore.index);


module.exports = router;