// Javascript-functions.js

// 1. Dit heet de *functie definitie*
function optellen(a, b) {
	// function body
	var uitkomst = a + b;
	return uitkomst;
}

//2. Functie aanroepen
function toonPrompt() {
	var a = parseInt(prompt('geef getal 1'));
	var b = parseInt(prompt('geef getal 2'));

	document.getElementById('btnOptellen').innerHTML = optellen(a, b);
}

//3. Functie voor de knop btnOptellen
// document.getElementById('btnOptellen').addEventListener('click', toonPrompt);
