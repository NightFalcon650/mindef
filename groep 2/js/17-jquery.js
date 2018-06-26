// 17-jquery.js

// $('body').css('background-color', 'blue');

// jQuery gebruiken: gebruik het dollarteken.
// OF: jQuery(...selectie...)

var fruitArray = [];

// Haal referentie op naar de knop en voeg Click-eventlistener toe
$('#fruitToevoegen').on('click', function() {
	// 1. Waarde ophalen uit het tekstvak
	var mijnFruit = $('#newFruit').val();

	// 2. Toevoegen/push op de array
	fruitArray.push(mijnFruit);

	// 3. Bestaande lijst leegmaken
	$('#listFruit').empty();

	//4. Loop over de array en voeg
	// nieuw listItem toe voor elk fruit
	for (var i = 0; i < fruitArray.length; i++) {
		var listItem = '<li class="list-group-item">' + fruitArray[i] + '</li>';
		// 4a. daadwerkelijk toevoegen
		$('#listFruit').append(listItem);
	}
});
