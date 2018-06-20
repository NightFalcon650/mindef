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
// var1 = 10;
// var2 = 20;
// alert(var1 + var2);
