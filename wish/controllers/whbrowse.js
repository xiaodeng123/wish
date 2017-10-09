// 定义对象
var whbrowse = {};


whbrowse.index = function(req, res) {

	res.render('whbrowse')
}

// 向外导出
module.exports = whbrowse;