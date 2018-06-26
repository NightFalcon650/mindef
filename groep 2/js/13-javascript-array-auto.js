// 13-javascript-array-auto.js

// 0. Initialisatie van alle variabelen die je nodig hebt.
var arrayVoertuigen = [];

// 1. Schrijven van functie om Voertuig aan de lijst toe te voegen
function voertuigToevoegen() {
	// 1a. ophalen van voertuig uit de textbox in de UI.
	var nieuwVoertuig = document.getElementById('txtInvoer').value;

	//1b-1. Check eerst, of er wel een voertuig is ingevuld
	if (nieuwVoertuig !== '') {
		// 1b-2. Toevoegen variabel aan de lijst met bestaande voertuigen
		arrayVoertuigen.push(nieuwVoertuig);
	}

	// 1c. Lijst leegmaken, voorafgaand aan toevoegen nieuw voertuig.
	document.getElementById('lijstVoertuigen').innerHTML = '';

	// 1d. Lussen over de lijst met voertuigen en nieuwe lijstItems samenstellen
	for (var i = 0; i < arrayVoertuigen.length; i++) {
		var nieuwListItem = '<li class="list-group-item">' + arrayVoertuigen[i];
		nieuwListItem += '</li>';
		//1d. Toevoegen aan de lijst met voertuigen in de UI.
		document.getElementById('lijstVoertuigen').innerHTML += nieuwListItem;
	} // einde for-lus

	// 1x. Tekstvak weer leeg maken voor invoeren van nieuw voertuig
	document.getElementById('txtInvoer').value = '';
	document.getElementById('txtInvoer').focus();
} // einde voertuigToevoegen

// 2. Event Listener toevoegen voor knop om voertuig te gaan toevoegen
document
	.getElementById('btnToevoegen')
	.addEventListener('click', voertuigToevoegen);
