// 21-jquery-ajax.js

// Constante - de URL waar de applicatie mee communiceert
var url = 'http://www.omdbapi.com/?apikey=f1f56c8e&s=';

//0. Document-ready function
$(document).ready(function() {
	// 1. Aanhaken van klikken op de knop
	$('#btnZoekFilm').on('click', function() {
		// 1a. Keyword en URL samenstellen
		var keyword = $('#txtKeyword').val();
		var urlNaarApi = url + keyword;

		// 1b. Ajax-functie uitvoeren
		$.ajax({
			url: urlNaarApi, // waar naartoe?
			method: 'POST', // welke methode?
			success: successFunction, // functie bij success
			error: errorFunction // functie bij error
		});
	});

	//******************* */
	// 2. functie die wordt uitgevoerd als het goed is gegaan
	//******************* */
	function successFunction(data) {
		// 1c. callback function die wordt uitgevoerd als het request goed gaat
		console.log(data);

		// 1d. De movies uit het return resultaat halen, het is een array
		var movies = data.Search;
		$('#resultFilm').empty();
		// 1e. Loop over de movies op de bekende wijze
		for (var i = 0; i < movies.length; i++) {
			// Samenstellen van een nieuw listitem met huidige movies
			var listItem = '<li class="list-group-item"><h2>' + movies[i].Title;
			listItem += ' (' + movies[i].Year + ')';
			listItem += '</h2><img src="' + movies[i].Poster + '">';
			listItem += '</li>';
			// toevoegen aan de lijst met films in de UI
			$('#resultFilm').append(listItem);
		} // end for-loop
	} // end success function

	//******************* */
	// 3. functie die wordt uitgevoerd als het fout is gegaan
	//******************* */
	function errorFunction(jqXHR, textStatus, errorThrown) {
		console.log('ERROR: Er is een fout opgetreden', textStatus);
	}
});
