import './style.scss';

const $ = require('jquery');
window.jQuery = $;

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
	$('#landing').addClass('bg-2-red')
	.on('animationend', function(){
        $('#landing').css({'backgroundColor' : '#F38787'});
		$('#landing').removeClass('bg-2-red');
	});
}

function changeToMove(){
	$('#landing').addClass('bg-2-black')
	.on('animationend', function(){
        $('#landing').css({'backgroundColor' : '#3D3D3D'});
		$('#landing').removeClass('bg-2-black');
	});
}

function changeToHear(){
	$('#landing').addClass('bg-2-yellow')
	.on('animationend', function(){
        $('#landing').css({'backgroundColor' : '#F1D8B3'});
		$('#landing').removeClass('bg-2-yellow');
	});
}

$(document).ready(function(){
	setInterval(changeBackgroundLanding, 5000);
});
