// 20-html-formulieren.js

$(document).ready(function() {
	// $('#divProvincie').hide();

	// Ga luisteren naar een change op de lijst met provincies
	$('#provincies').on('change', function() {
		// Als voor 'overig' is gekozen, laat dan de
		// div zien waarin een andere provincie ingevuld kan worden.
		if ($('#provincies').val() === 'other') {
			$('#divProvincie').show();
		} else {
			// anders: verberg deze div indien zichtbaar.
			$('#divProvincie').hide();
		}
	});

	// Ga luisteren naar een change op de lijst met websites
	$('#sites').on('change', function() {
		// Open de url in een nieuw venster/tab
		window.open($(this).val());
		// mag ook : window.open($('#sites').val());
	});
});
