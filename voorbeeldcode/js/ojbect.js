// object.js

// Een object bestaat uit naam/waarde-paren
// de naam en waarde worden ALTIJD
// met een dubbele punt van elkaar gescheiden
var fruitObject = {
	naam: 'Appel',
	kleur: ['groen', 'geel', 'roodgroen'],
	prijs: 2.3,
	inhoud: {
		metKlokhuis: 'ja',
		geschild: 'nee'
	},
	toonNaam: function() {
		return 'Ik ben een: ' + this.naam;
	}
};
document.getElementById('divResult').innerHTML = fruitObject.toonNaam();

// Een array met klantgegevens.
// Elke klant is een object
var klanten = [
	{ naam: 'Facebook', werknemers: 20000 },
	{ naam: 'Google', werknemers: 35000 },
	{ naam: 'Microsof', werknemers: 87000 },
	{ naam: 'MinDef', werknemers: 12000 },
	{ naam: 'BuZa', werknemers: 6000 }
];
// Klantgegevens tonen in de User Interface

for (var i = 0; i < klanten.length; i++) {
	// Hier, binnen de lus, een nieuw ListItem samenstellen
	var listItem =
		'<li>' +
		klanten[i].naam +
		', werknemers:' +
		klanten[i].werknemers +
		'</li>';
	document.getElementById('lijstKlanten').innerHTML += listItem;
}
