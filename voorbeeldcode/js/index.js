// 1. Basis JS berekeningen uitvoeren
var x = 2 + 2;
console.log('De waarde van x is: ', x);

// 2. Toepassen op het document
var breedte = screen.width;
var hoogte = screen.height;
var mijnElement = document.getElementById('breedte');
mijnElement.innerHTML = breedte;
document.getElementById('hoogte').innerHTML = hoogte;

// <!-- Dit is HTML commentaar -->
// 3. 'Casting' = omzetten van variabelen
var tekst = '10';
var naam = 'Bas'; // 'string'
var getal = 10; // wordt : '10'
// var uitkomst = naam + getal; // Rob10
// alert(uitkomst); // toon in de browser

// 4. parseInt() en parseFloat()
var getal1 = '1'; // nu is getal1 een string
var getal2 = '2'; // nu is getal2 een string
getal1 = parseInt(prompt('vul een getal in')); // getal: 10
// getal2 = parseInt(prompt('vul nog een getal in ')); // getal : 20
var uitkomst = getal1 + getal2;
document.getElementById('divResult1').innerHTML = uitkomst;

// 5. 'Boolean' variabelen
// Hiermee kun je bepalen of iets 'true' of 'false' is
// HIERMEE kun je dus VERGELIJKINGEN uitvoeren

x = uitkomst > 10; // x === true
x = uitkomst < 10; // x === false

// 6. Een if-statement voor program flow
uitkomst = 20; // tijdelijke overrule
if (uitkomst !== 20) {
	// 'Logical OR' ||
	// 'Logical AND' &&
	// 'Logical NOT' !
	document.getElementById('divResult2').innerHTML =
		'De uitkomst is  alles behalve  20 !';
} else if (uitkomst === 20) {
	document.getElementById('divResult2').innerHTML =
		'De uitkomst is exact 20!';
} else {
	document.getElementById('divResult2').innerHTML =
		'De uitkomst is iets anders!';
}

// 7. for-lus
// Er gebeuren drie dingen
// for (variabele, conditie, ophoging ){.....}
for (var i = 1; i <= 10; i++) {
	//... voer berekening uit...
}
/// hier verder, zodra i groter is dan 10

// 8. Complexe variabelen
// 8.1 - Functions

// functie definitie,
// Haal een naam op en voeg deze toe aan het document
var naam;
function toonNaam() {
	naam = document.getElementById('txtNaam').value;
	document.getElementById('divResult2').innerHTML = '<br> Hello ' + naam;
	console.log('Hello ' + naam);
}
// function invoking/aanroepen
// toonNaam();

// Een JavaScript calculator:
function optellen(a, b) {
	return a + b;
}
function vermenigvuldig(a, b) {
	return a * b;
}
//... extra functies....
console.log(optellen (10,20));
console.log(vermenigvuldig (10,20));


