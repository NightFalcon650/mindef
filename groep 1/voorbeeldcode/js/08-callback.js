// 08-callback.js
$(document).ready(function() {
	// Laat de voorwaarden in beginsel verborgen

	$('#btnVerberg').on('click', function() {
		if ($('#voorwaarden').is(':hidden')) {
			alert('de voorwaarden zijn al verborgen');
		} else {
			// hide wordt nu 'asynchroon' uitgevoerd
			$('#voorwaarden').hide('slow', function() {
				// Doe dit pas na afloop.
				alert('De voorwaarden zijn nu verborgen');
			});
		}
		// ga pas een function uitvoeren
		// als de animatie gereed is.
		// dit heet een CALLBACK-function;
	});
	$('#btnToon').on('click', function() {
		$('#voorwaarden').show('slow');
	});

	// Dit is voor de knop Toggle zichtbaar/onzichtbaar
	$('#btnToggle').on('click', function() {
		$('#voorwaarden').toggle();
	});
});
