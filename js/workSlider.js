// var slider = document.getElementById('workSlider');
// var move = 0;
// function slideLeft() {
// 	if(move != -200) {
// 		move = move - 30
// 	}else {
// 		move = 0;
// 	}
// 	slider.style.left = move + '%'
// }
//
// function slideBack() {
// 	if(move != 0) {
// 		move = move + 30
// 	}else {
// 		move = -200
// 	}
// 	slider.style.left = move + '%'
// }

var slider = document.getElementById('workSlider');
var buton = document.getElementById('buton')
var move = 0;

function slideMove(){
	if(move == 0){
		 move = move - 39;
	}else {
		move = 0
	}
	slider.style.left = move + '%';
}
