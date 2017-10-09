// 定义对象
var users = {};


users.index = function(req, res) {

	res.render('users')
}

// 向外导出
module.exports = users;