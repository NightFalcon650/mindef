// JavaScript if-else voorbeeld

var optie1 = 'Goed bezig!';
var optie2 = 'Pak eerst een bakkie!';
var optie3 = 'Laat me met rust';

var uitkomst = prompt('kies een getal tussen 1 en 3');

// Een 'vergelijkings statement'
// bij een if moet de voorwaarde ALTIJD evalueren naar 'true' of 'false'

if (uitkomst === '1') {
	document.getElementById('uitkomst').innerHTML = optie1;
} else if (uitkomst === '2') {
	document.getElementById('uitkomst').innerHTML = optie2;
} else if (uitkomst === '3') {
	document.getElementById('uitkomst').innerHTML = optie3;
} else {
	document.getElementById('uitkomst').innerHTML =
		' Dit is geen geldig getal!';
}
