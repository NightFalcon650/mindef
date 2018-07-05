// 19-jquery-callback.js

// 0. Wachten tot het document gereed is
$(document).ready(function() {
	// 1. Klik op de knop Voorwaaren afvangen
	$('#btnVoorwaarden').on('click', function() {
		// 2. De div met algemene voorwaarden verbergen.
		$('#boxVoorwaarden').hide(1000, function() {
			//  3. Deze regel wordt uitgevoerd NADAT de voorgaande
			// animatie compleet is.Dit heet een callback-functie
			alert('De voorwaarden zijn verborgen');
		});
	});
});
