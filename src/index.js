import './style.scss';

const $ = require('jquery');
window.jQuery = $;

function resize(){
	// var w = $(window).width();
	// var h = $(window).height();

	// var biw = (w * 650) / 1440;
	// var bih = (biw * 632) / 650;

	// $('#board').css({'width' : biw + 'px', 'height' : bih + 'px'});
}

$(document).ready(function(){
	resize();
});

$(window).resize(function(){
	resize();
});

// $(document).keypress(function(){
// 	$('#landing').addClass('bg-2-black')
// 	.on('animationend', function(){
// 		$('#landing').css({'backgroundColor' : '#333333'});
// 		$('#landing').removeClass('bg-2-black');
// 	});
// });
