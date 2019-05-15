import './style.scss';

const $ = require('jquery');
window.jQuery = $;

const LANDING_ANIM_TIME = 7000;
const LANDING_ANIM_FADE_TIME = 2000;

const boards = {
	SEE : 'see',
	MOVE : 'move',
	HEAR : 'hear'
};

var cBoardBg = boards.SEE;

function changeBackgroundLanding(){
	if(cBoardBg == boards.SEE){
		changeToMove();
		cBoardBg = boards.MOVE;
	}
	else if(cBoardBg == boards.MOVE){
		changeToHear();
		cBoardBg = boards.HEAR;
	}
	else if(cBoardBg == boards.HEAR){
		changeToSee();
		cBoardBg = boards.SEE;
	}
}

function changeToSee(){
	$('#bgg3').fadeOut(LANDING_ANIM_FADE_TIME);
	$('#bgg1').fadeIn(LANDING_ANIM_FADE_TIME);

	$('#legend').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-title').text('Fortune Recognition');
		$('#kit-description').text('See through the logic of Fortune.');
		$('#legend').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});
}

function changeToMove(){
	$('#bgg1').fadeOut(LANDING_ANIM_FADE_TIME);
	$('#bgg2').fadeIn(LANDING_ANIM_FADE_TIME);

	$('#legend').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-title').text('Harmonious Positioning System');
		$('#kit-description').text('Move with the logic of Harmony and Geomancy.');
		$('#legend').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});
}

function changeToHear(){
	$('#bgg2').fadeOut(LANDING_ANIM_FADE_TIME);
	$('#bgg3').fadeIn(LANDING_ANIM_FADE_TIME);

	$('#legend').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-title').text('Numerological Language Processing');
		$('#kit-description').text('Hear through the logic of Numerology.');
		$('#legend').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});
}

$(document).ready(function(){
	$('#bgg1').css({'backgroundImage' : 'url(img/see-kit.jpg)'});
	$('#bgg2').css({'backgroundImage' : 'url(img/move-kit.jpg)'});
	$('#bgg3').css({'backgroundImage' : 'url(img/hear-kit.jpg)'});
	$('#move-buy').css({'backgroundImage' : 'url(img/move-package.jpg)'});
	$('#see-buy').css({'backgroundImage' : 'url(img/see-package.jpg)'});
	$('#hear-buy').css({'backgroundImage' : 'url(img/hear-package.jpg)'});
	setInterval(changeBackgroundLanding, LANDING_ANIM_TIME);
});


$('#kit-buy').on('click', function(e){
	console.log('CLICK');
});
