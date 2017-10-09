var express = require('express');
var router = express.Router();


//引入对应控制器模块
var whbrowse = require('../controllers/whbrowse')

router.get('/', whbrowse.index);


module.exports = router;