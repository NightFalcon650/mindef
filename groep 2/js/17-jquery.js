// 17-jquery.js

// algemene variabelen, buiten de document.ready-function

// Best practice: gebruik globale 'Namespace' om variabelen af te schermen
// voor per ongeluk overschrijven door andere variabelen.
// Dit heet het 'Object Literal Design Pattern';
var mindefVars = {
	fruitArray: []
};

$(document).ready(function() {
	// $('body').css('background-color', 'blue');

	// jQuery gebruiken: gebruik het dollarteken.
	// OF: jQuery(...selectie...)

	// Haal referentie op naar de knop en voeg Click-eventlistener toe
	$('#fruitToevoegen').on('click', function() {
		// 1. Waarde ophalen uit het tekstvak met jQuery-opdracht .val()
		var mijnFruit = $('#newFruit').val();

		// 2. Toevoegen/push op de array
		mindefVars.fruitArray.push(mijnFruit);

		// 3. Loop over de array en voeg
		// nieuw listItem toe voor elk fruit
		renderList();
	});

	// 4. Gedrag aanhaken voor de Delete knop in elk listItem
	$(document).on('click', '.deleteBtn', function() {
		// 4a. Zoek positie binnen de array op
		var position = $(this).data('id');

		// 4b. splits 1 item uit de array op gevonden positie
		mindefVars.fruitArray.splice(position, 1);

		// 4c. render de lijst opnieuw
		renderList();
	});

	// 5. Lijst (opnieuw) renderen.
	function renderList() {
		// 5a. Bestaande lijst leegmaken, met jQuery-opdracht .empty()
		$('#listFruit').empty();

		// 5b. Standaard JavaScript for-lus
		for (var i = 0; i < mindefVars.fruitArray.length; i++) {
			// Nieuw listItem samenstellen, met Delete-knop
			var listItem =
				'<li class="list-group-item">' + mindefVars.fruitArray[i];
			listItem +=
				'<button class="btn btn-danger btn-sm float-right deleteBtn" data-id="' +
				i +
				'">Delete</button>' +
				'</li>';
			// 5c. daadwerkelijk toevoegen, met jQuery-opdracht .append()
			$('#listFruit').append(listItem);
		}
	}

	// 6. Klik op de knop en de voorwaarden worden verborgen:
	$('#btnVoorwaarden').on('click', function() {
		$('#voorwaarden').slideToggle(300);
	});
}); // end document ready
