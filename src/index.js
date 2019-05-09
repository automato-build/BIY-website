import './style.scss';

const $ = require('jquery');
window.jQuery = $;


$(document).ready(function(){

});

$(document).keypress(function(){
	$('#landing').addClass('bg-2-black')
	.on('animationend', function(){
		$('#landing').css({'backgroundColor' : '#333333'});
		$('#landing').removeClass('bg-2-black');
	});
});
