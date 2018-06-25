// javascript-for.js - voorbeeld van for-lus

// 1. vraag een getal
var getal = parseInt(prompt('voer een getal in '));

// 2. Ga de tafel van dat getal op het scherm zetten
for (var i = 0; i <= 10; i++) {
	var uitkomst = i * getal;
	document.getElementById('divResult').innerHTML += uitkomst + '<p>';
}
console.log('De som is klaar');
