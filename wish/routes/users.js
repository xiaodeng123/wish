var express = require('express');
var router = express.Router();


//引入对应控制器模块
var users = require('../controllers/users')

router.get('/', users.index);


module.exports = router;
