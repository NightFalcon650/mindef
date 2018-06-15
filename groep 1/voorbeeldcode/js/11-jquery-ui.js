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
		slide: function(event, ui) {
			$('#sliderResult').html(ui.value);
			$('#inputBestel').val(ui.value);
		}
	};
	$('#mySlider').slider(sliderOptions);

	$('#btnInstellen').on('click', function(e) {
		// 1. 'e' is hier het event dat door de browser wordt gegenereerd.
		// Het de standaardactie voor knoppen, namelijk het versturen van het formulier.
		// Dat wil je hier voorkomen,
		// Omdat je een eigen waarde wilt invullen in het bestelvak.
		e.preventDefault();

		// 2. Voer je eigen handelingen uit, IN PLAATS VAN versturen.
		var aantalItems = $('#mySlider').slider('value'); // Dit is nu een <input type="hidden" ...>
		$('#inputBestel').val(aantalItems);
	});
});
