// mijnJquery.js
// document.getElementById('divResult') // Ouderwets JavaScript

// Selecteer een div via Jquery en vul de html ervan in
$('#divResult').html('Hallo, dit is jQuery - vanuit script');

// Aanhaken van click-event voor de knop met id="btnToonMessage"
$('#btnToonMessage').on('click', toonMessage);

function toonMessage() {
	// 1. Ophalen van de Naam
	var naam = $('#txtMessage').val();

	// 2. maken van het bericht
	var message = 'Hallo ' + naam + ', het is mooi weer';

	// 3. Terugschrijven van bericht naar UI
	$('#divResult').html(message);
}

// functionaliteit schrijven voor de knop id="btnVerberg"
$('#btnVerberg').on('click', verbergMessage);
$('#btnToon').on('click', toonMessage);

function verbergMessage() {
	$('#divResult').hide();
}

function toonMessage() {
	$('#divResult').show();
}
