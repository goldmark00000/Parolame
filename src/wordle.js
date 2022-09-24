/*JavaScript per Wordle */
var riga1 = 0
var riga2 = 0
var riga3 = 0
var riga4 = 0
var riga5 = 0

var contatore = 0;
var blocco = 0;
var parola = ["", "", "", "", ""];
var r = 0;
var vitt = 0;
var img;
var counter = 0

window.onload = function () {
	id1.value = "";
	id2.value = "";

}




document.addEventListener("keyup", function (event) {
	if (event.keyCode === 8) {
		cancella()
	}
});

function jump001(field, autoMove) {
	if (field.value.length >= field.maxLength) {
		document.getElementById(autoMove).focus();
	}
}

function crea() {
	//Da 0 a n, quanti sono i numeri multipli di 5 che puoi generare?
	//Dato questo valore lo usi come range della funzione random e moltiplichi il risultato per 5

	r = Math.floor((Math.random() * 57) + 1);

	switch (r) {
		case 1:
			parola = ["p", "o", "e", "t", "a"];
			break;

		case 2:
			parola = ["d", "a", "n", "t", "e"];
			break;

		case 3:
			parola = ["v", "e", "r", "s", "o"];
			break;

		case 4:
			parola = ["a", "m", "o", "r", "e"];
			break;

		case 5:
			parola = ["v", "e", "r", "b", "o"];
			break;

		case 6:
			parola = ["l", "a", "u", "r", "a"];
			break;

		case 7:
			parola = ["t", "a", "s", "s", "o"];
			break;

		case 8:
			parola = ["t", "e", "s", "t", "o"];
			break;

		case 9:
			parola = ["e", "p", "i", "c", "a"];
			break;

		case 10:
			parola = ["s", "t", "i", "l", "e"];
			break;

		case 11:
			parola = ["g", "r", "e", "c", "o"];
			break;

		case 12:
			parola = ["f", "i", "a", "b", "a"];
			break;

		case 13:
			parola = ["e", "s", "o", "p", "o"];
			break;

		case 14:
			parola = ["e", "l", "e", "n", "a"];
			break;

		case 15:
			parola = ["k", "a", "f", "k", "a"];
			break;

		case 16:
			parola = ["p", "a", "u", "r", "a"];
			break;

		case 17:
			parola = ["p", "u", "n", "t", "o"];
			break;

		case 18:
			parola = ["v", "e", "r", "g", "a"];
			break;

		case 19:
			parola = ["r", "e", "a", "l", "e"];
			break;

		case 20:
			parola = ["l", "u", "c", "i", "a"];
			break;

		case 21:
			parola = ["r", "e", "n", "z", "o"];
			break;

		case 22:
			parola = ["o", "r", "t", "i", "s"];
			break;

		case 23:
			parola = ["c", "u", "o", "r", "e"];
			break;

		case 24:
			parola = ["d", "o", "n", "n", "a"];
			break;

		case 25:
			parola = ["l", "a", "g", "e", "r"];
			break;

		case 26:
			parola = ["p", "r", "o", "s", "a"];
			break;

		case 27:
			parola = ["m", "e", "t", "r", "o"];
			break;

		case 28:
			parola = ["o", "p", "e", "r", "a"];
			break;

		case 29:
			parola = ["w", "o", "o", "l", "f"];
			break;

		case 30:
			parola = ["l", "i", "b", "r", "o"];
			break;

		case 31:
			parola = ["f", "r", "a", "s", "e"];
			break;


		case 32:
			parola = ["d", "e", "f", "o", "e"];
			break;


		case 33:
			parola = ["t", "e", "m", "p", "o"];
			break;

		case 34:
			parola = ["s", "c", "o", "t", "t"];
			break;


		case 35:
			parola = ["s", "p", "o", "s", "i"];
			break;


		case 36:
			parola = ["j", "o", "y", "c", "e"];
			break;

		case 37:
			parola = ["a", "l", "i", "c", "e"];
			break;


		case 38:
			parola = ["v", "o", "l", "p", "e"];
			break;


		case 39:
			parola = ["f", "e", "d", "r", "o"];
			break;

		case 40:
			parola = ["f", "o", "s", "t", "e"];
			break;

		case 41:
			parola = ["s", "e", "l", "v", "a"];
			break;

		case 42:
			parola = ["l", "i", "m", "b", "o"];
			break;

		case 43:
			parola = ["l", "a", "u", "d", "a"];
			break;

		case 44:
			parola = ["g", "a", "d", "d", "a"];
			break;

		case 45:
			parola = ["c", "a", "n", "t", "i"];
			break;

		case 46:
			parola = ["m", "o", "n", "z", "a"];
			break;

		case 47:
			parola = ["i", "t", "a", "l", "y"];
			break;

		case 48:
			parola = ["p", "a", "o", "l", "o"];
			break;

		case 49:
			parola = ["f", "e", "r", "m", "o"];
			break;

		case 50:
			parola = ["m", "a", "d", "r", "e"];
			break;

		case 51:
			parola = ["c", "a", "p", "r", "i"];
			break;

		case 52:
			parola = ["f", "i", "u", "m", "i"];
			break;

		case 53:
			parola = ["l", "a", "m", "p", "o"];
			break;

		case 54:
			parola = ["t", "u", "o", "n", "o"];
			break;

		case 55:
			parola = ["p", "o", "r", "t", "a"];
			break;

		case 56:
			parola = ["p", "e", "s", "t", "e"];
			break;

		case 57:
			parola = ["t", "e", "d", "u", "a"];
			break;
			alert(parola);
	}

}

function controlla1() {
	crea();

	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id0").value == parola[i])
			document.getElementById("id0").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id0").value == parola[0])
		document.getElementById("id0").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id1").value == parola[i])
			document.getElementById("id1").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id1").value == parola[1])
		document.getElementById("id1").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id2").value == parola[i])
			document.getElementById("id2").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id2").value == parola[2])
		document.getElementById("id2").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id3").value == parola[i])
			document.getElementById("id3").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id3").value == parola[3])
		document.getElementById("id3").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id4").value == parola[i])
			document.getElementById("id4").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id4").value == parola[4])
		document.getElementById("id4").style = "background-color:#45794b";


	if (document.getElementById("id4").value == parola[4] && document.getElementById("id3").value == parola[3] && document.getElementById("id2").value == parola[2] && document.getElementById("id1").value == parola[1] && document.getElementById("id0").value == parola[0]) {

		vinto()
	}

}

function controlla2() {
	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id5").value == parola[i])
			document.getElementById("id5").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id5").value == parola[0])
		document.getElementById("id5").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id6").value == parola[i])
			document.getElementById("id6").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id6").value == parola[1])
		document.getElementById("id6").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id7").value == parola[i])
			document.getElementById("id7").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id7").value == parola[2])
		document.getElementById("id7").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id8").value == parola[i])
			document.getElementById("id8").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id8").value == parola[3])
		document.getElementById("id8").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id9").value == parola[i])
			document.getElementById("id9").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id9").value == parola[4])
		document.getElementById("id9").style = "background-color:#45794b";


	if (document.getElementById("id9").value == parola[4] && document.getElementById("id8").value == parola[3] && document.getElementById("id7").value == parola[2] && document.getElementById("id6").value == parola[1] && document.getElementById("id5").value == parola[0]) {

		vinto()
	}

}

function controlla3() {
	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id10").value == parola[i])
			document.getElementById("id10").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id10").value == parola[0])
		document.getElementById("id10").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id11").value == parola[i])
			document.getElementById("id11").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id11").value == parola[1])
		document.getElementById("id11").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id12").value == parola[i])
			document.getElementById("id12").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id12").value == parola[2])
		document.getElementById("id12").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id13").value == parola[i])
			document.getElementById("id13").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id13").value == parola[3])
		document.getElementById("id13").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id14").value == parola[i])
			document.getElementById("id14").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id14").value == parola[4])
		document.getElementById("id14").style = "background-color:#45794b";


	if (document.getElementById("id14").value == parola[4] && document.getElementById("id13").value == parola[3] && document.getElementById("id12").value == parola[2] && document.getElementById("id11").value == parola[1] && document.getElementById("id10").value == parola[0]) {

		vinto()
	}
}
function controlla4() {
	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id15").value == parola[i])
			document.getElementById("id15").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id15").value == parola[0])
		document.getElementById("id15").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id16").value == parola[i])
			document.getElementById("id16").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id16").value == parola[1])
		document.getElementById("id16").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id17").value == parola[i])
			document.getElementById("id17").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id17").value == parola[2])
		document.getElementById("id17").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id18").value == parola[i])
			document.getElementById("id18").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id18").value == parola[3])
		document.getElementById("id18").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id19").value == parola[i])
			document.getElementById("id19").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id19").value == parola[4])
		document.getElementById("id19").style = "background-color:#45794b"


	if (document.getElementById("id19").value == parola[4] && document.getElementById("id18").value == parola[3] && document.getElementById("id17").value == parola[2] && document.getElementById("id16").value == parola[1] && document.getElementById("id15").value == parola[0]) {

		vinto()
	}
}
function controlla5() {
	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id20").value == parola[i])
			document.getElementById("id20").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id20").value == parola[0])
		document.getElementById("id20").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id21").value == parola[i])
			document.getElementById("id21").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id21").value == parola[1])
		document.getElementById("id21").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id22").value == parola[i])
			document.getElementById("id22").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id22").value == parola[2])
		document.getElementById("id22").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id23").value == parola[i])
			document.getElementById("id23").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id23").value == parola[3])
		document.getElementById("id23").style = "background-color:#45794b"


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id24").value == parola[i])
			document.getElementById("id24").style = "background-color:#ffbf00"

	}
	if (document.getElementById("id24").value == parola[4])
		document.getElementById("id24").style = "background-color:#45794b"


	if (document.getElementById("id24").value == parola[4] && document.getElementById("id23").value == parola[3] && document.getElementById("id22").value == parola[2] && document.getElementById("id21").value == parola[1] && document.getElementById("id20").value == parola[0]) {

		vinto()
	}
}

function controlla6() {
	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id25").value == parola[i])
			document.getElementById("id25").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id25").value == parola[0])
		document.getElementById("id25").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id26").value == parola[i])
			document.getElementById("id26").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id26").value == parola[1])
		document.getElementById("id26").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id27").value == parola[i])
			document.getElementById("id27").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id27").value == parola[2])
		document.getElementById("id27").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id28").value == parola[i])
			document.getElementById("id28").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id28").value == parola[3])
		document.getElementById("id28").style = "background-color:#45794b";


	for (let i = 0; i < 5; i++) {
		if (document.getElementById("id29").value == parola[i])
			document.getElementById("id29").style = "background-color:#ffbf00";

	}
	if (document.getElementById("id29").value == parola[4])
		document.getElementById("id29").style = "background-color:#45794b";


	if (document.getElementById("id29").value == parola[4] && document.getElementById("id28").value == parola[3] && document.getElementById("id27").value == parola[2] && document.getElementById("id26").value == parola[1] && document.getElementById("id25").value == parola[0]) {

		vinto()
	}
	else perso()
}

function perso() {

	document.getElementById('lose')
		.style.display = "block";
	document.getElementById('title')
		.style.display = "none";
	document.getElementById("blur").style.filter = "blur(3px)";
	document.getElementById("blur").style.marginBottom = "5%";
	alert(parola)
	document.addEventListener("keyup", function (event) {
		if (event.keyCode === 13) {
			location.reload()
		}
	});
}


function vinto() {

	document.getElementById('win')
		.style.display = "block";
	document.getElementById('title')
		.style.display = "none";
	document.getElementById("blur").style.filter = "blur(3px)";
	document.addEventListener("keyup", function (event) {
		if (event.keyCode === 13) {

		}
	});
}


function prova() {



	if (contatore == 0) {
		controlla1();
		document.getElementById("id5").focus();
	}
	else if (contatore == 1) {
		controlla2()
		document.getElementById("id10").focus();
	}
	else if (contatore == 2) {
		controlla3()
		document.getElementById("id15").focus();
	}
	else if (contatore == 3) {
		controlla4()
		document.getElementById("id20").focus();
	}
	else if (contatore == 4) {
		controlla5()
		document.getElementById("id25").focus();

	}
	else if (contatore == 5) {
		controlla6()
		document.activeElement.blur();
	}



	contatore = contatore + 1
	/*alert("questa è la parola " + parola)*/
}

function cancella() {

	if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "" && document.getElementById("id24").value != "" && document.getElementById("id25").value != "" && document.getElementById("id26").value != "" && document.getElementById("id27").value != "" && document.getElementById("id28").value != "" && document.getElementById("id29").value != "") {
		document.getElementById("id29").value = "";
		document.getElementById("id29").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "" && document.getElementById("id24").value != "" && document.getElementById("id25").value != "" && document.getElementById("id26").value != "" && document.getElementById("id27").value != "" && document.getElementById("id28").value != "") {
		document.getElementById("id28").value = "";
		document.getElementById("id28").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "" && document.getElementById("id24").value != "" && document.getElementById("id25").value != "" && document.getElementById("id26").value != "" && document.getElementById("id27").value != "") {
		document.getElementById("id27").value = "";
		document.getElementById("id27").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "" && document.getElementById("id24").value != "" && document.getElementById("id25").value != "" && document.getElementById("id26").value != "") {
		document.getElementById("id26").value = "";
		document.getElementById("id26").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "" && document.getElementById("id24").value != "" && document.getElementById("id25").value != "") {
		document.getElementById("id25").value = "";
		document.getElementById("id25").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "" && document.getElementById("id24").value != "") {
		if (riga5 == 0) {
			document.getElementById("id24").value = "";
			document.getElementById("id24").focus();
		}
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "" && document.getElementById("id23").value != "") {
		document.getElementById("id23").value = "";
		document.getElementById("id23").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "" && document.getElementById("id22").value != "") {
		document.getElementById("id22").value = "";
		document.getElementById("id22").focus();
	}


	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "" && document.getElementById("id21").value != "") {
		document.getElementById("id21").value = "";
		document.getElementById("id21").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "" && document.getElementById("id20").value != "") {
		document.getElementById("id20").value = "";
		document.getElementById("id20").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "" && document.getElementById("id19").value != "") {
		if (riga4 == 0) {
			document.getElementById("id19").value = "";
			document.getElementById("id19").focus();
		}
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "" && document.getElementById("id18").value != "") {
		document.getElementById("id18").value = "";
		document.getElementById("id18").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "" && document.getElementById("id17").value != "") {
		document.getElementById("id17").value = "";
		document.getElementById("id17").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "" && document.getElementById("id16").value != "") {
		document.getElementById("id16").value = "";
		document.getElementById("id16").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "" && document.getElementById("id15").value != "") {
		document.getElementById("id15").value = "";
		document.getElementById("id15").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "" && document.getElementById("id14").value != "") {
		if (riga3 == 0) {
			document.getElementById("id14").value = "";
			document.getElementById("id14").focus();
		}
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "" && document.getElementById("id13").value != "") {
		document.getElementById("id13").value = "";
		document.getElementById("id13").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "" && document.getElementById("id12").value != "") {
		document.getElementById("id12").value = "";
		document.getElementById("id12").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "" && document.getElementById("id11").value != "") {
		document.getElementById("id11").value = "";
		document.getElementById("id11").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "" && document.getElementById("id10").value != "") {
		document.getElementById("id10").value = "";
		document.getElementById("id10").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "" && document.getElementById("id9").value != "") {
		if (riga2 == 0) {
			document.getElementById("id9").value = "";
			document.getElementById("id9").focus();
		}
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "" && document.getElementById("id8").value != "") {
		document.getElementById("id8").value = "";
		document.getElementById("id8").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "" && document.getElementById("id7").value != "") {
		document.getElementById("id7").value = "";
		document.getElementById("id7").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "" && document.getElementById("id6").value != "") {
		document.getElementById("id6").value = "";
		document.getElementById("id6").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "" && document.getElementById("id5").value != "") {
		document.getElementById("id5").value = "";
		document.getElementById("id5").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "" && document.getElementById("id4").value != "") {
		if (riga1 == 0) {
			document.getElementById("id4").value = "";
			document.getElementById("id4").focus();
		}
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "" && document.getElementById("id3").value != "") {
		document.getElementById("id3").value = "";
		document.getElementById("id3").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "" && document.getElementById("id2").value != "") {
		document.getElementById("id2").value = "";
		document.getElementById("id2").focus();
	}

	else if (document.getElementById("id0").value != "" && document.getElementById("id1").value != "") {
		document.getElementById("id1").value = "";
		document.getElementById("id1").focus();
	}

	else if (document.getElementById("id0").value != "") {
		document.getElementById("id0").value = "";
		document.getElementById("id0").focus();
	}

}

function blocca() {

	if (blocco == 0) {
		document.getElementById("id0").disabled = true;
		document.getElementById("id1").disabled = true;
		document.getElementById("id2").disabled = true;
		document.getElementById("id3").disabled = true;
		document.getElementById("id4").disabled = true;
		riga1 = 1;
	}
	else if (blocco == 1) {
		document.getElementById("id5").disabled = true;
		document.getElementById("id6").disabled = true;
		document.getElementById("id7").disabled = true;
		document.getElementById("id8").disabled = true;
		document.getElementById("id9").disabled = true;
		riga2 = 1;
	}
	else if (blocco == 2) {
		document.getElementById("id10").disabled = true;
		document.getElementById("id11").disabled = true;
		document.getElementById("id12").disabled = true;
		document.getElementById("id13").disabled = true;
		document.getElementById("id14").disabled = true;
		riga3 = 1;
	}
	else if (blocco == 3) {
		document.getElementById("id15").disabled = true;
		document.getElementById("id16").disabled = true;
		document.getElementById("id17").disabled = true;
		document.getElementById("id18").disabled = true;
		document.getElementById("id19").disabled = true;
		riga4 = 1;
	}
	else if (blocco == 4) {
		document.getElementById("id20").disabled = true;
		document.getElementById("id21").disabled = true;
		document.getElementById("id22").disabled = true;
		document.getElementById("id23").disabled = true;
		document.getElementById("id24").disabled = true;
		riga5 = 1;
	}
	else if (blocco == 5) {
		document.getElementById("id25").disabled = true;
		document.getElementById("id26").disabled = true;
		document.getElementById("id27").disabled = true;
		document.getElementById("id28").disabled = true;
		document.getElementById("id29").disabled = true;

	}

	blocco = blocco + 1


}


function modulo() {
	document.getElementById('modulo').style.display = "block";



}

function chiusura() {
	document.getElementById('modulo').style.display = "none";

}