// calculator.js - een eenvoudige JavaScript calculator

function optellen(a, b) {
	document.getElementById('divResult').innerHTML = parseInt(a) + parseInt(b);
}
function vermenigvuldig(a, b) {
	document.getElementById('divResult').innerHTML = parseInt(a) * parseInt(b);
}
function aftrekken(a, b) {
	document.getElementById('divResult').innerHTML = parseInt(a) - parseInt(b);
}
function delen(a, b) {
	// extra check, controleer op delen door nul
	if (b === 0) {
		return 'Ongeldig';
	} else {
		document.getElementById('divResult').innerHTML =
			parseInt(a) / parseInt(b);
	}
}
//... extra functies....
