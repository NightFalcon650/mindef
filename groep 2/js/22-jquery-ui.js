// 22-jquery-ui.js

var beginwaarde = 700;

$(document).ready(function() {
	// jQuery UI datepicker activeren.
	$('#datumpicker').datepicker($.datepicker.regional['nl']);

	$('#sliderValue').html(beginwaarde);

	// Maak een configuratie object voor de slider
	var sliderConfig = {
		slide: function(event, ui) {
			$('#sliderValue').html(ui.value);
		},
		min: 100,
		max: 1000,
		value: beginwaarde
	};

	// Slider activeren met een configuratie object
	$('#slider').slider(sliderConfig);
});
