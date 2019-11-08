$(window).scroll(function(){
	var eScroll = $(this).scrollTop();
	// console.log(eScroll);

	$('h1').css({
		// 'transform' : 'translate(0, 200px)'
		'transform':'translate(0px, '+ eScroll/2 +'% )'
	});

	$('.kotak').css({
		'transform':'translate(0px, '+ eScroll/10 +'%)'
	});
});