// 使页面支持rem的JS配置文件

// 以iphone 6页面为标准
var clientWidth = 1920;		/* 标准视口宽度 */
var fontSize = 20;			/* 标准HTML元素大小 */

// 当前设备下的视口宽度
window.onload = function(){
	// 获取html元素
	var html = document.documentElement;

	// 当前设备可视窗口宽度
	var nowClientWidth = html.clientWidth;

	// 计算出当前设备下html元素的font-size
	var newFontSize = nowClientWidth*fontSize/clientWidth;

	console.log(newFontSize);

	// 设置html元素的fontSize
	html.style.fontSize = newFontSize+'px';
}
// $(function(){
// 	$(window).resize(function ()// 绑定到窗口的这个事件中
// 	{
// 	  var whdef = 16/1920;// 表示1920的设计图,使用100PX的默认值
// 	  var wH = window.innerHeight;// 当前窗口的高度
// 	  var wW = window.innerWidth;// 当前窗口的宽度
// 	  var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
// 	  $('html').css('font-size', rem + "px");
// 	  console.log(rem)
// 	});
// })
	