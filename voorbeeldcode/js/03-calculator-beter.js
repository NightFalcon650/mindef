// calculator.js - een eenvoudige JavaScript calculator
var a; // Aangeven DAT je de variablen a en b wilt gaan gebruiken,
var b; // maar ze krijgen op dit moment nog GEEN waarde

// Stap 1. Ga de getallen ophalen, HIER worden a en b gevuld
// Met de actuele waarden uit de input-velden.
// Dit is een HELPER-function. Hij wordt alleen intern gebruikt
function haalGetallenOp() {
	a = parseInt(document.getElementById('getal1').value);
	b = parseInt(document.getElementById('getal2').value);
}

// Stap 2. Ga de bewerking uitvoeren.
function optellen() {
	haalGetallenOp();
	document.getElementById('divResult').innerHTML = a + b;
}
function vermenigvuldig() {
	// var a = parseInt(document.getElementById('getal1').value);
	// var b = parseInt(document.getElementById('getal2').value);
	haalGetallenOp();
	document.getElementById('divResult').innerHTML = a * b;
}
function aftrekken() {
	// var a = parseInt(document.getElementById('getal1').value);
	// var b = parseInt(document.getElementById('getal2').value);
	haalGetallenOp();
	document.getElementById('divResult').innerHTML = a - b;
}
function delen() {
	// var a = parseInt(document.getElementById('getal1').value);
	// var b = parseInt(document.getElementById('getal2').value);
	haalGetallenOp();
	// extra check, controleer op delen door nul
	if (b === 0) {
		return 'Ongeldig';
	} else {
		document.getElementById('divResult').innerHTML = a / b;
	}
}
//... extra functies....
