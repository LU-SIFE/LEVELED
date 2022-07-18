//variable setup
var text_progressable = false;
var story_progress = 0;
var fast_text = false;
var pause_state = false;

setTimeout(() => unfade(proceed_text), 2000);
setTimeout(() => text_progressable = true, 3000);


//shake function shake container is the element to apply the effect to.
function shake_effect(shake_container) {
	
	let shake_counter = 0;
	let inter1 = setInterval(function() {
	
		if (shake_counter == 0) {
			document.getElementById(shake_container).style.transform = "rotate(0.01turn)";
			shake_counter = 1;
		} else  if (shake_counter == 1) {
			document.getElementById(shake_container).style.transform = "rotate(-0.01turn)";
			shake_counter = 2;
		} else {
			document.getElementById(shake_container).style.transform = "rotate(0.0turn)";
			clearInterval(inter1);
		}
	},30);
}