// 08-callback.js
$(document).ready(function() {
	// Laat de voorwaarden in beginsel verborgen
	

	$('#btnVerberg').on('click', function() {
		// hide wordt nu 'asynchroon' uitgevoerd
		$('#voorwaarden').hide('slow', function() {
			// Doe dit pas na afloop.
			alert('De voorwaarden zijn nu verborgen');
		});
		// ga pas een function uitvoeren
		// als de animatie gereed is.
		// dit heet een CALLBACK-function

		// alert('De voorwaarden zijn verborgen');
	});
	$('#btnToon').on('click', function() {
		$('#voorwaarden').show('slow');
	});
});
