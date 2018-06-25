// Javascript-functions.js

// 1. Alle calculator-functies
function optellen(a, b) {
	// Binnen de accolades heet de 'function body'
	var uitkomst = a + b;
	return uitkomst;
}

function aftrekken(a, b) {
	var uitkomst = a - b;
	return uitkomst;
}

function delen(a, b) {
	var uitkomst = a / b;
	return uitkomst;
}

function vermenigvuldig(a, b) {
	var uitkomst = a * b;
	return uitkomst;
}

//2. Functie aanroepen
// 2. Ik definieer hier de *globale* variabelen getal1 en getal2.
// Deze worden vanuit de verschillende functies gevuld met een waarde.
var getal1;
var getal2;

function toonPrompt() {
	// Old-skool, getal ophalen via prompt()
	// getal1 = parseInt(prompt('geef getal 1'));
	// getal2 = parseInt(prompt('geef getal 2'));

	// Getal ophalen uit tekstbox - gebruik de waarde .value
	getal1 = parseInt(document.getElementById('txtGetal1').value);
	getal2 = parseInt(document.getElementById('txtGetal2').value);
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
document.getElementById('btnDelen').addEventListener('click', toonDelen);
document
	.getElementById('btnAftrekken')
	.addEventListener('click', toonAftrekken);
document
	.getElementById('btnVermenigvuldig')
	.addEventListener('click', toonVermenigvuldig);
