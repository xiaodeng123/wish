// 定义对象
var whmore = {};


whmore.index = function(req, res) {

	res.render('whmore')
}

// 向外导出
module.exports = whmore;