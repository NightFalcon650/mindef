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
