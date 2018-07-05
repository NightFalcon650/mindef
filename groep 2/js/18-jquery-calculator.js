// 18-jquery-calculator.js

// 'scope' van de variabelen is nu globaal
var getal1;
var getal2;

$(document).ready(function() {
	function haalGetallenOp() {
		getal1 = parseInt($('#txtGetal1').val());
		getal2 = parseInt($('#txtGetal2').val());
	}
	// ALS er op de optellen-knop wordt geklikt,
	// ga dan de functie uitvoeren
	$('#btnOptellen').on('click', function() {
		haalGetallenOp();
		var result = getal1 + getal2;
		$('#divResult').text(result);
	});

	// Aftrekken
	$('#btnAftrekken').on('click', function() {
		haalGetallenOp();
		var result = getal1 - getal2;
		$('#divResult').text(result);
	});

	//Delen
	$('#btnDelen').on('click', function() {
		haalGetallenOp();
		var result = getal1 / getal2;
		$('#divResult').text(result);
	});

	// Vermenigvuldig
	$('#btnVermenigvuldig').on('click', function() {
		haalGetallenOp();
		var result = getal1 * getal2;
		$('#divResult').text(result);
	});
});
