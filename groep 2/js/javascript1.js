// alert('Hello Amersfoort');
// maak een *variabele* om je leeftijd te onthouden
var leeftijd = prompt('wat is je leeftijd?');

// schrijf de opgegeven leeftijd in de browser console
console.log(leeftijd);

// 1. Haal het document op (=webpagina)
// 2. Zoek een element met id="resultLeeftijd"
// 3. Stel de waarde innerHTML in (=de tekst binnen het gevonden element)
// 4. Ken de opgehaalde leeftijd hier aan toe.
document.getElementById('resultLeeftijd').innerHTML = leeftijd;

// Voorbeeld: twee variabelen bij elkaar optellen.
var getal1 = 10;
var getal2 = 20;
var uitkomst = getal1 + getal2;
var tekst = '<h2>' + uitkomst + '</h2>';
tekst += ' is de uitkomst!!!';

document.getElementById('uitkomst').innerHTML = tekst;

// Voorbeeld:: maken van een object - dit komt later nogmaals aan de orde.
// Het 'object' cursist. Wordt gegroepeerd met accolades {...}
var cursist = { naam: 'Theo', email: 'theo@theo.nl' };
console.log(cursist.naam);
