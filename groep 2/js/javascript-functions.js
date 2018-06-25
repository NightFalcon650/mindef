// Javascript-functions.js

// 1. Alle calculator-functies
function optellen(a, b) {
	// function body
	var uitkomst = a + b;
	return uitkomst;
}

function aftrekken(a, b) {
	dy;
	var uitkomst = a - b;
	return uitkomst;
}

function delen(a, b) {
	// function body
	var uitkomst = a / b;
	return uitkomst;
}

function vermenigvuldig(a, b) {
	// function body
	var uitkomst = a * b;
	return uitkomst;
}

//2. Functie aanroepen
// 2. Ik definieer hier de *globale* variabelen getal1 en getal2.
// Deze worden vanuit de verschillende functies gevuld met een waarde.

var getal1;
var getal2;
function toonPrompt() {
	getal1 = parseInt(prompt('geef getal 1'));
	getal2 = parseInt(prompt('geef getal 2'));
}
function toonOptellen() {
	toonPrompt();
	document.getElementById('divResult').innerHTML = optellen(getal1, getal2);
}

function toonAftrekken() {
	toonPrompt();
	document.getElementById('divResult').innerHTML = aftrekken(getal1, getal2);
}

function toonDelen() {
	toonPrompt();
	document.getElementById('divResult').innerHTML = delen(getal1, getal2);
}

function toonVermenigvuldig() {
	toonPrompt();
	document.getElementById('divResult').innerHTML = vermenigvuldig(
		getal1,
		getal2
	);
}
//3. Functie voor de knop btnOptellen
document.getElementById('btnOptellen').addEventListener('click', toonOptellen);
document
	.getElementById('btnAftrekken')
	.addEventListener('click', toonAftrekken);
document.getElementById('btnDelen').addEventListener('click', toonDelen);
document
	.getElementById('btnVermenigvuldig')
	.addEventListener('click', toonVermenigvuldig);
