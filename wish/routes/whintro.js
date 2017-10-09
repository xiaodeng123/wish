var express = require('express');
var router = express.Router();


//引入对应控制器模块
var whintro = require('../controllers/whintro')

router.get('/', whintro.index);


module.exports = router;
