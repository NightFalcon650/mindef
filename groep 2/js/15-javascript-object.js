// 15-javascript-object.js
// Een array wordt aangeveven met [],
// een object wordt aangegeven met {}.

// 1. Definieer het object 'vrachtwagen'
var vrachtwagen = {
	kleur: 'groen',
	merk: 'Volvo',
	prijs: 65000,
	gewicht: '10 ton',
	opvoorraad: true,
	accessoires: ['ruitenwissers', 'abs', 'stuurbekrachtiging']
};

// De eigenschappen van een object, worden bereikt
// via de zgn. punt-notatie ('dot notation')
console.log(vrachtwagen.merk); // Volvo

// Combinaties - inhoud van de array opvragen:
console.log(vrachtwagen.accessoires[0]);

var nieuweKleur = 'rood';

// 2. Nog een object maken
var auto = {
	kleur: nieuweKleur,
	merk: 'BMW',
	prijs: 98000,
	gewicht: '2,5 ton',
	opvoorraad: true,
	accessoires: ['bluetooth radio', 'navigatie', 'verder niks']
};

// 3. Een array van objecten maken
var voertuigArray = [];
voertuigArray.push(vrachtwagen);
voertuigArray.push(auto);
console.log(voertuigArray);

// 4. Loop over de array en toon alle objecten in de UI
for (var i = 0; i < voertuigArray.length; i++) {
	var listItem =
		'<li class="list-group-item"><h2>' + voertuigArray[i].merk + '</h2>';
	listItem += voertuigArray[i].prijs + ',' + voertuigArray[i].accessoires;
	listItem += '</li>';
	document.getElementById('lijstVoertuigen').innerHTML += listItem;
}
