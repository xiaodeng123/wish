// 定义对象
var whintro = {};


whintro.index = function(req, res) {

	res.render('whintro')
}

// 向外导出
module.exports = whintro;