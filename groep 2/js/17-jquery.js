// 17-jquery.js

// $('body').css('background-color', 'blue');

// jQuery gebruiken: gebruik het dollarteken.
// OF: jQuery(...selectie...)

var fruitArray = [];

// Haal referentie op naar de knop en voeg Click-eventlistener toe
$('#fruitToevoegen').on('click', function() {
	// 1. Waarde ophalen uit het tekstvak met jQuery-opdracht .val()
	var mijnFruit = $('#newFruit').val();

	// 2. Toevoegen/push op de array
	fruitArray.push(mijnFruit);

	// 3. Loop over de array en voeg
	// nieuw listItem toe voor elk fruit
	renderList();
});

// 4. Gedrag aanhaken voor de Delete knop in elk listItem
$(document).on('click', '.deleteBtn', function() {
	// 4a. Zoek positie binnen de array op
	var position = $(this).data('id');

	// 4b. splits 1 item uit de array op gevonden positie
	fruitArray.splice(position, 1);

	// 4c. render de lijst opnieuw
	renderList();
});

// 5. Lijst (opnieuw) renderen.
function renderList() {
	// 5a. Bestaande lijst leegmaken, met jQuery-opdracht .empty()
	$('#listFruit').empty();

	// 5b. Standaard JavaScript for-lus
	for (var i = 0; i < fruitArray.length; i++) {
		// Nieuw listItem samenstellen, met Delete-knop
		var listItem = '<li class="list-group-item">' + fruitArray[i];
		listItem +=
			'<button class="btn btn-danger btn-sm float-right deleteBtn" data-id="' +
			i +
			'">Delete</button>' +
			'</li>';
		// 5c. daadwerkelijk toevoegen, met jQuery-opdracht .append()
		$('#listFruit').append(listItem);
	}
}
