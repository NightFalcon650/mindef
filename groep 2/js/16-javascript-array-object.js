// 16-javascript-array-object.js

// Combinaties van alle technieken en concepten die we tot
// nu toe hebben besproken.

// 0. Initialisatie van alle variabelen die je nodig hebt.
var arrayVoertuigen = [];

// 1. Schrijven van functie om Voertuig aan de lijst toe te voegen
function voertuigToevoegen() {
	// 1a. ophalen van voertuig uit de textbox in de UI.

	// Stel nieuw voertuig object samen
	var nieuwVoertuig = {
		merk: document.getElementById('txtMerk').value,
		prijs: document.getElementById('txtPrijs').value,
		afbeelding: document.getElementById('txtAfbeelding').value
	};
	// Push object naar de array
	arrayVoertuigen.push(nieuwVoertuig);

	// 1d. Lussen over de lijst met voertuigen en nieuwe lijstItems samenstellen
	renderVoertuigen();

	// 1f. Tekstvak weer leeg maken voor invoeren van nieuw voertuig
	document.getElementById('txtMerk').value = '';
	document.getElementById('txtPrijs').value = '';
	document.getElementById('txtAfbeelding').value = '';
	document.getElementById('txtMerk').focus();
} // einde voertuigToevoegen

// 2. Event Listener toevoegen voor knop om voertuig te gaan toevoegen
document
	.getElementById('btnToevoegen')
	.addEventListener('click', voertuigToevoegen);

// 3. Het tonen van voertuigen in de lijst nu uitbesteed aan een eigen functie
function renderVoertuigen() {
	// 1c. Lijst leegmaken, voorafgaand aan toevoegen nieuw voertuig.
	document.getElementById('lijstVoertuigen').innerHTML = '';

	for (var i = 0; i < arrayVoertuigen.length; i++) {
		var nieuwListItem =
			'<li class="list-group-item"><span class="merk">' +
			arrayVoertuigen[i].merk +
			'</span>';
		nieuwListItem +=
			'<span class="prijs">' + arrayVoertuigen[i].prijs + '</span>';
		nieuwListItem +=
			'<img src="img/' + arrayVoertuigen[i].afbeelding + '">';

		nieuwListItem += '</li>';
		//1d. Toevoegen aan de lijst met voertuigen in de UI.
		document.getElementById('lijstVoertuigen').innerHTML += nieuwListItem;
	} // einde for-lus
}
