// 11-jquery-ui.js

$(document).ready(function() {
	// Ga de datumpicker activeren
	// 1. Selecteer de tekstbox in de HTML
	// 2. VOeg daar de plugin aan toe
	var datePickerFormatObject = {
		dateFormat: 'dd-mm-yy',
		duration: 'slow'
	};

	// 1. Datepicker activeren
	$('#myDatepicker').datepicker(datePickerFormatObject);

	// 2. Gekozen datum uitlezen en in de pagina tonen.
	$('#getDate').on('click', function() {
		var gekozendatum = $('#myDatepicker').val();
		$('#divResult').html(gekozendatum);
		//..... allerlei andere dingen doen met gekozendatum
	});

	///******************** Slider */
	var sliderOptions = {
		min: 0,
		max: 100,
		value: 50,
		step: 10,
		slide: function(event, ui) {
			$('#sliderResult').html(ui.value);
		}
	};
	$('#mySlider').slider(sliderOptions);
});
