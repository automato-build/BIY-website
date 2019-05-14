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

	$('#kit-title').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-title').text('Fortune Recognition');
		$('#kit-title').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});

	$('#kit-description').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-description').text('See through the logic of Fortune.');
		$('#kit-description').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});
}

function changeToMove(){
	// $('#landing').addClass('bg-2-black')
	// .on('animationend', function(){
 //        $('#landing').css({'backgroundColor' : '#3D3D3D'});
	// 	$('#landing').removeClass('bg-2-black');
	// });
	$('#bgg1').fadeOut(LANDING_ANIM_FADE_TIME);
	$('#bgg2').fadeIn(LANDING_ANIM_FADE_TIME);

	$('#kit-title').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-title').text('Harmonious Positioning System');
		$('#kit-title').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});

	$('#kit-description').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-description').text('Move with the logic of Harmony and Geomancy.');
		$('#kit-description').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});
}

function changeToHear(){
	$('#bgg2').fadeOut(LANDING_ANIM_FADE_TIME);
	$('#bgg3').fadeIn(LANDING_ANIM_FADE_TIME);

	$('#kit-title').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-title').text('Numerological Language Processing');
		$('#kit-title').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});

	$('#kit-description').fadeOut(LANDING_ANIM_FADE_TIME/2, function(){
		$('#kit-description').text('Hear through the logic of Numerology.');
		$('#kit-description').fadeIn(LANDING_ANIM_FADE_TIME/2);
	});
}

$(document).ready(function(){
	$('#bgg1').css({'backgroundImage' : 'url(img/bg-see.jpg)'});
	$('#bgg2').css({'backgroundImage' : 'url(img/bg-move.jpg)'});
	$('#bgg3').css({'backgroundImage' : 'url(img/bg-hear.jpg)'});
	setInterval(changeBackgroundLanding, LANDING_ANIM_TIME);
});
