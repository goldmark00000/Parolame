
var length=5;
const row=6;
var word="world";
var current_box_id=1;
var score=0;

window.onload = function() {
	document.getElementById("date").innerHTML=new Date().toLocaleDateString();
	Create_parolame();
	document.querySelector(":root").style.setProperty("--selection_width", document.getElementById("settings_interface").clientWidth-80);
	document.querySelector(":root").style.setProperty("--win_lose_width", document.getElementById("settings_interface").clientHeight*0.75);
};

function Create_parolame(){
	var parolame;
	parolame="<table><tr>";
	parolame+="<th><input autocomplete='off' class='box' type='text' readonly='readonly' id='1' maxlength='1' onkeydown='Jump_to_box(this)' autofocus>";
	for(var i=0;i<row;i++){
		if(i==0){
			for(var j=2;j<=length;j++){
				parolame+="<th><input autocomplete='off' class='box' type='text' readonly='readonly' id='";
				parolame+=i*length+j;
				if(j!=length){
					parolame+="' maxlength='1' onkeydown='Jump_to_box(this)'>";
				} else{
					parolame+="' maxlength='1' onkeydown='Jump_to_confirm(this)'>";
				}
			}
		} else{
			for(var j=1;j<=length;j++){
				parolame+="<th><input autocomplete='off' class='box' type='text' readonly='readonly' id='";
				parolame+=i*length+j;
				if(j!=length){
					parolame+="' maxlength='1' onkeydown='Jump_to_box(this)'>";
				} else{
					parolame+="' maxlength='1' onkeydown='Jump_to_confirm(this)'>";
				}
			}
		}
		parolame+="</tr>";
	}
	parolame+="</table>";
	document.getElementById("table").innerHTML=parolame;
	alert("default word length: "+length+"; default word: "+word);
}

function Upadate_parolame(selected_length){
	for(var i=1;i<=length*row;i++){
		document.getElementById(i).remove();
	}
	length=selected_length;
	switch(selected_length){
		case 4:
			word="word";	//need connection to words database
			break;
		case 5:
			word="world";	//need connection to words database
			break;
		case 6:
			word="worlds";	//need connection to words database
			break;
		case 7:
			word="worldly";	//need connection to words database
			break;
	}
	Create_parolame();
}

function Update_score(){
	document.getElementById("score").innerHTML="Score: "+score;
}

document.querySelector(":root").style.setProperty("--second_part_width", "0px");
function Settings(){
	var w=getComputedStyle(document.body).getPropertyValue('--second_part_width');
	if(w=="0px" || w==""){
		Show_settings();
	} else{
		Hide_settings();
	}
}
function Show_settings(){
	var r=document.querySelector(":root");
	r.style.setProperty("--second_part_width", "100%");
	r.style.setProperty("--settings_interface_zindex", "1");
	r.style.setProperty("--settings_interface_transition", "0s");
	r.style.setProperty("--second_part_li_display", "block");
	r.style.setProperty("--first_part_border_radius", "0px");
	r.style.setProperty("--icon_rotate", "rotate(180deg)");
}
function Hide_settings(){
	var r=document.querySelector(":root");
	r.style.setProperty("--second_part_width", "0px");
	r.style.setProperty("--settings_interface_zindex", "0");
	r.style.setProperty("--settings_interface_transition", "0.15s");
	r.style.setProperty("--second_part_li_display", "none");
	r.style.setProperty("--first_part_border_radius", "0px 0px 0px 12px");
	r.style.setProperty("--icon_rotate", "rotate(0deg)");
	Hide_words_select();
	Hide_access();
	Hide_info();
}

document.querySelector(":root").style.setProperty("--words_select2_height", "0px");
function Words_select(){
	var w=getComputedStyle(document.body).getPropertyValue('--words_select2_height');
	if(w=="0px" || w==""){
		Show_words_select();
	} else{
		Hide_words_select();
	}
}
function Show_words_select(){
	var r=document.querySelector(":root");
	r.style.setProperty("--words_select2_height", "auto");
	r.style.setProperty("--words_select2_display", "block");
	document.getElementById("words_select1").innerHTML="Change word length ︿";
}
function Hide_words_select(){
	var r=document.querySelector(":root");
	r.style.setProperty("--words_select2_height", "0px");
	r.style.setProperty("--words_select2_display", "none");
	document.getElementById("words_select1").innerHTML="Change word length ﹀";
}

document.querySelector(":root").style.setProperty("--access2_height", "0px");
function Access(){
	var w=getComputedStyle(document.body).getPropertyValue('--access2_height');
	if(w=="0px" || w==""){
		Show_access();
	} else{
		Hide_access();
	}
}
function Show_access(){
	var r=document.querySelector(":root");
	r.style.setProperty("--access2_height", "auto");
	r.style.setProperty("--access2_display", "block");
	document.getElementById("access1").innerHTML="User access ︿";
}
function Hide_access(){
	var r=document.querySelector(":root");
	r.style.setProperty("--access2_height", "0px");
	r.style.setProperty("--access2_display", "none");
	document.getElementById("access1").innerHTML="User access ﹀";
}

document.querySelector(":root").style.setProperty("--info2_height", "0px");
function Info(){
	var w=getComputedStyle(document.body).getPropertyValue('--info2_height');
	if(w=="0px" || w==""){
		Show_info();
	} else{
		Hide_info();
	}
}
function Show_info(){
	var r=document.querySelector(":root");
	r.style.setProperty("--info2_height", "auto");
	r.style.setProperty("--info2_display", "block");
	document.getElementById("info1").innerHTML="Info ︿";
}
function Hide_info(){
	var r=document.querySelector(":root");
	r.style.setProperty("--info2_height", "0px");
	r.style.setProperty("--info2_display", "none");
	document.getElementById("info1").innerHTML="Info ﹀";
}

document.addEventListener("keyup", function (event) {
	if (event.keyCode === 8) {
		Cancel();
	}
});

function Cancel(){
	if(document.getElementById(current_box_id).value!="" || (current_box_id-1)%length==0){
		document.getElementById(current_box_id).value="";
		Focus(current_box_id);
	} else{
		document.getElementById(current_box_id-1).value="";
		Focus(current_box_id-1);
	}
}

function Jump_to_box(field){
	var key=event.key;
	var keyCode=event.keyCode;
	current_box_id=parseInt(field.id);
	if(keyCode>=65 && keyCode<=90){
		document.getElementById(current_box_id).value=key;
		Focus(current_box_id+1);
	}
}

function Jump_to_confirm(field){
	var key=event.key;
	var keyCode=event.keyCode;
	current_box_id=parseInt(field.id);
	if(keyCode>=65 && keyCode<=90){
		document.getElementById(current_box_id).value=key;
		Focus("confirm");
	}
}

function Focus(id){
	document.getElementById(id).focus();
}

function Confirm(){
	var correct_counter=0;
	var remainder=current_box_id%length;
	if(remainder==0){
		for(var i=0;i<length;i++){
			for(var j=0;j<length;j++){
				if(document.getElementById(current_box_id-(length-i-1)).value==word[j]){
					document.getElementById(current_box_id-(length-i-1)).style=	"background-color:#ffbf00;"
				}
			}
		}
		for(var i=0;i<length;i++){
			if(document.getElementById(current_box_id-(length-i-1)).value==word[i]){
				document.getElementById(current_box_id-(length-i-1)).style="background-color:#45794b;"
				correct_counter++;
			}
		}
		if(correct_counter==length){
			Win();
		} else if(current_box_id/length==row){
			Lose();
		} else{
			Focus(current_box_id+1);
			Block_row();
			current_box_id+=1;
		}
	} else{
		for(var i=0;i<remainder;i++){
			for(var j=0;j<length;j++){
				if(document.getElementById(current_box_id-(remainder-i-1)).value==word[j]){
					document.getElementById(current_box_id-(remainder-i-1)).style=	"background-color:#ffbf00;"
				}
			}
		}
		for(var i=0;i<length;i++){
			if(document.getElementById(current_box_id-(remainder-i-1)).value==word[i]){
				document.getElementById(current_box_id-(remainder-i-1)).style="background-color:#45794b;"
				correct_counter++;
			}
		}
		if(correct_counter==length){
			Win();
		} else if((current_box_id+(length-remainder))/length==row){
			Lose();
		} else{
			Focus(current_box_id+(length-remainder)+1);
			Block_row();
			current_box_id+=(length-remainder)+1;
		}
	}
}

function Block_row(){
	if(current_box_id%length==0){
		for(var i=1;i<=current_box_id;i++){
			document.getElementById(i).disabled=true;
		}
	} else{
		for(var i=1;i<=current_box_id+(length-current_box_id%length);i++){
			document.getElementById(i).disabled=true;
		}
	}
}

function Win(){
	Blur(true);
	document.getElementById("confirm").disabled=true;
	document.querySelector(":root").style.setProperty("--game_over_zindex", "10");
	document.querySelector(":root").style.setProperty("--game_over_transition", "0s");
	document.querySelector(":root").style.setProperty("--win_height", "100%");
	Focus("clean");
	score++;
	Update_score();
}

function Lose(){
	Blur(true);
	document.getElementById("confirm").disabled=true;
	document.querySelector(":root").style.setProperty("--game_over_zindex", "10");
	document.querySelector(":root").style.setProperty("--game_over_transition", "0s");
	document.querySelector(":root").style.setProperty("--lose_height", "100%");
	Focus("clean");
}

function Blur(active){
	if(active==true){
		document.querySelector(":root").style.setProperty("--blur", "3px");
	} else{
		document.querySelector(":root").style.setProperty("--blur", "0px");
	}
}

function Clean(){
	document.querySelector(":root").style.setProperty("--game_over_zindex", "-1");
	document.querySelector(":root").style.setProperty("--game_over_transition", "0.8s");
	document.querySelector(":root").style.setProperty("--win_height", "0px");
	document.querySelector(":root").style.setProperty("--lose_height", "0px");
	for(var i=1;i<=length*row;i++){
		document.getElementById(i).disabled=false;
		document.getElementById(i).value="";
		document.getElementById(i).style="background-color:none;"
	}
	document.getElementById("confirm").disabled=false;
	Blur(false);
	Focus(1);
	current_box_id=1;
}