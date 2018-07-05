// 20-html-formulieren.js

$(document).ready(function() {
	// $('#divProvincie').hide();

	// Ga luisteren naar een change op de lijst met provincies
	$('#provincies').on('change', function() {
		if ($('#provincies').val() === 'other') {
			$('#divProvincie').show();
		} else {
			$('#divProvincie').hide();
		}
	});

	// Ga luisteren naar een change op de lijst met websites
	$('#sites').on('change', function() {
		window.open($(this).val());
	});
});
