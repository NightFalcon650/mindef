// 22-jquery-ui.js

// 0. Initialisatie van de beginwaarde
var beginwaarde = 700;

$(document).ready(function() {
	// 1. jQuery UI datepicker activeren.
	$('#datumpicker').datepicker($.datepicker.regional['nl']);

	// 2. Stel de beginwaarde in voor de slider in de user interface
	$('#sliderValue').html(beginwaarde);

	// 3. Maak een configuratie object voor de slide.
	// Zie voor meer mogelijkheden de documentatie op
	// https://jqueryui.com/slider/
	var sliderConfig = {
		slide: function(event, ui) {
			$('#sliderValue').html(ui.value);
		},
		min: 100,
		max: 1000,
		value: beginwaarde
	};

	// 4. Slider activeren met een configuratie object
	$('#slider').slider(sliderConfig);
});
