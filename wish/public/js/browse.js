$(function(){

// 瀑布流开始
	// 每个容器的外边距 
	var margin = 20;

	run();

	function run(){

		// 每个li 标签所占的宽度
		var liWidth = $('.search>ul>li')[0].offsetWidth+margin;

		// 第一批能放多少张图片
		var num = parseInt(window.innerWidth/liWidth);

		// 定义一个数组来记录高度
		var liH = [];

		for(var i=0;i<$('.search>ul>li').length;i++){
			if(i<num){
				// 第一排
				$('.search>ul>li').eq(i).css({top:0,left:i*liWidth});
				liH[i] = $('.search>ul>li')[i].offsetHeight;
				// console.log(liH);
			}else{
				// 不是第一排
				// 找最小高度
				var minH = Math.min.apply(null,liH);
				// 找最小高度对应的索引
				var minIndex = liH.indexOf(minH);

				$('.search>ul>li').eq(i).css({top:minH+margin,left:minIndex*liWidth});

				// 更新 记录的高度数组
				liH[minIndex] += $('.search>ul>li')[i].offsetHeight+margin;

				// console.log(minH);
				// console.log(minIndex);
			}
		}

	}


	window.onresize = function(){
		run();

	}


	// 监听滚动条
	$(document).on('scroll',function(){
		// console.log('ok')	
		if($(window).height()+$(this).scrollTop() > $(this).height()-300){
			// console.log('到底了');
			// 请求图片数据列表
			// getData();
		}
	})

	// 去后台获取图片列表去
	// 等老胡讲完 Ajax 再来看一下这个 $.ajax 的请求
	// function getData(){
	// 	$.ajax({
	// 		dataType:'json',
	// 		url:'04.php',
	// 		type:'post',
	// 		success:function(response){
				
	// 			// alert(response);
	// 			for(var i=0;i<response.length;i++){
	// 				$('ul').append('<li><img src="images/'+response[i].src+'"><p>'+response[i].title+'</p></li>')
	// 			}	
	// 			run();
	// 		}
	// 	});

	// }
// 瀑布流结束


// console.log($)

// 大选项卡开始
	$('.navs>.container>div').click(function(){
		var index = $(this).index();
		// console.log(index)

		$('main>div').hide();
		$('.navs>.container>div').css({
			'border-bottom': 'none'
		});
		$('main>div').eq(index).show();
		$('.navs>.container>div').eq(index).css({
			'border-bottom':'6px solid #FFD52B'
		});


	})
// 大选项卡结束


// 话题选项卡开始
 $('.topic-navs>ul>.topic-nav').click(function(){
 	var index = $(this).index();
 	$('.topic-option>div').hide();
	$('.topic-navs>ul>.topic-nav').css({
		'background':'none'
	});
	$('.topic-navs>ul>.topic-nav>a').css({
		color: '#282828'
	});



 	$('.topic-option>div').eq(index).show();

 	$('.topic-navs>ul>.topic-nav').eq(index).css({
		'background':'#363636'
	});
	$('.topic-navs>ul>.topic-nav>a').eq(index).css({
		color: '#fff'
	});

 })
// 话题选项卡结束

// 达人选项卡开始
 $('.expert-navs>ul>li').click(function(){
 	var index = $(this).index();
 	$('.expert-option>div').hide();
	$('.expert-navs>ul>li').css({
		'background':'none'
	});
	$('.expert-navs>ul>li>a').css({
		color: '#282828'
	});



 	$('.expert-option>div').eq(index).show();

 	$('.expert-navs>ul>li').eq(index).css({
		'background':'#363636'
	});
	$('.expert-navs>ul>li>a').eq(index).css({
		color: '#fff'
	});

 })
// 达人选项卡结束































})

