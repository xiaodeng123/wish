// index.js 和 routes/index.js是对应的

// 定义对象
var index = {};


index.index = function(req, res) {

	res.render('index')
}

// 向外导出
module.exports = index;