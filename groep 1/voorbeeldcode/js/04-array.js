// array.js
// Een array is een VERZAMELING van variabelen
var mijnArray = []; // ALTIJD blokhaken - deze array doet verder niks.

// Een verzameling met fruit. In een array
var fruitArray = ['appel', 'peer', 'Banaan', 'druif'];

// Over de array loopen om gegevens in de user interface te tonen.

for (var i = 0; i < fruitArray.length; i++) {
	document.getElementById('divResult').innerHTML += '<br>' + fruitArray[i];
}

function getFruit() {
	var getal = parseInt(document.getElementById('inputFruit').value);
	console.log(getal);
	if (getal >= fruitArray.length) {
		document.getElementById('divFruit').innerHTML =
			'Dit fruit is niet gevonden';
	} else {
		document.getElementById('divFruit').innerHTML = fruitArray[getal];
	}
}

function omkeren() {
	// reset
	document.getElementById('divResult').innerHTML = '';

	// volgorde omkeren
	fruitArray.reverse();

	// Array opnieuw naar het scherm schrijven
	for (var i = 0; i < fruitArray.length; i++) {
		document.getElementById('divResult').innerHTML +=
			'<br>' + fruitArray[i];
	}
}

function sorteren() {
	// reset
	document.getElementById('divResult').innerHTML = '';

	// volgorde omkeren
	fruitArray.sort();

	// Array opnieuw naar het scherm schrijven
	for (var i = 0; i < fruitArray.length; i++) {
		document.getElementById('divResult').innerHTML +=
			'<br>' + fruitArray[i];
	}
}

function toevoegenFruit() {
	var nieuwFruit = document.getElementById('inputFruit').value;
	fruitArray.push(nieuwFruit);

	// reset
	document.getElementById('divResult').innerHTML = '';
	// Array opnieuw naar het scherm schrijven
	for (var i = 0; i < fruitArray.length; i++) {
		document.getElementById('divResult').innerHTML +=
			'<br>' + fruitArray[i];
	}
}
