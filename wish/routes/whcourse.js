var express = require('express');
var router = express.Router();


//引入对应控制器模块
var whcourse = require('../controllers/whcourse')


router.get('/', whcourse.index);

module.exports = router;