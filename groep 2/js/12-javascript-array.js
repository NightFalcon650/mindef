// 12-javascript-array.js
var mijnArray = [];
var fruitArray = ['appel', 'peer', 'banaan', 'perzik', 'kiwi'];
console.log(fruitArray);

// 0. Vul de lijst met huidige fruit-soorten
function stelLijstSamen() {
	// 0a. Ga eerst de huidige lijst leegmaken
	document.getElementById('listFruit').innerHTML = '';

	// 0b. Ga de nieuwe lijst samenstellen
	for (var i = 0; i < fruitArray.length; i++) {
		// stel een nieuw listitem samen, op basis van inhoud van de array
		var newListItem =
			'<li class="list-group-item" >' + fruitArray[i] + '</li>';

		// Haal een referentie op naar de lijst, en voeg het nieuwe listItem toe
		document.getElementById('listFruit').innerHTML += newListItem;
	}
}
// 0c. Roep minimaal 1 x  de functie aan om de lijst samen te stellen
stelLijstSamen();

// 0d. functie voor het ophalen van nieuw ingevoegde fruit
document
	.getElementById('fruitToevoegen')
	.addEventListener('click', fruitToevoegen);

function fruitToevoegen() {
	// 1. Ophalen wat iemand heeft ingevoerd in textbox 'newFruit'
	var newFruit = document.getElementById('newFruit').value;

	//2. Toevoegen aan de array
	fruitArray.push(newFruit);

	// 3. Nieuwe array, tonen in de User Interface (UI)
	// document.getElementById('divResult').innerHTML = fruitArray;
	stelLijstSamen();

	// 4. Maak de textbox weer leeg
	document.getElementById('newFruit').value = '';
}
