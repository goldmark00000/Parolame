
var n=5;
var row=3;
var current_box_id=0;
var word=["w","o","r","l","d"];
/*var current_box_id=[2];
for(var i=0;i<n;i++){
	current_box_id[i]=0;
}
var recorder=[n][2];
var auxiliary_recorder=[n][2];
for(var i=0;i<n;i++){
	for(var j=0;j<2;j++){
		recorder[i][j]=0;
		auxiliary_recorder[i][j]=0;
	}
}*/
/*var recorder=[n];
var auxiliary_recorder=[n];
for(var i=0;i<n;i++){
	recorder[i]=0;
	auxiliary_recorder[i]=0;
}*/

document.addEventListener("keyup", function (event) {
	if (event.keyCode === 8) {
		Cancel();
	}
});

/*function Record(){
	if(recorder[0][0]!=current_box_id[0] || recorder[0][1]!=current_box_id[1]){
		for(var i=1;i<n;i++){
			for(var j=0;j<2;j++){
				auxiliary_recorder[i][j]=recorder[i-1][j];
			}
		}
		recorder[0][0]=current_box_id[0];
		recorder[0][1]=current_box_id[1];
		for(var i=1;i<n;i++){
			for(var j=0;j<2;j++){
				recorder[i][j]=auxiliary_recorder[i][j];
			}
		}
	}
}*/
/*function Record(){
	if(recorder[0]!=current_box_id){
		for(var i=1;i<n;i++){
			auxiliary_recorder[i]=recorder[i-1];
		}
		recorder[0]=current_box_id;
		for(var i=1;i<n;i++){
			recorder[i]=auxiliary_recorder[i];
		}
	}
}*/

function Cancel(){
	if(document.getElementById(current_box_id).value!="" || (current_box_id-1)%n==0){
		document.getElementById(current_box_id).value="";
		Focus(current_box_id);
	} else{
		document.getElementById(current_box_id-1).value="";
		Focus(current_box_id-1);
	}
}

function Jump_to_box(field){
	current_box_id=parseInt(field.id);
	if (field.value.length >= field.maxLength) {
		Focus(current_box_id+1);
	}
	//Record();
}

function Jump_to_confirm(field){
	current_box_id=parseInt(field.id);
	if (field.value.length >= field.maxLength) {
		Focus('confirm');
	}
	//Record();
}

function Focus(id){
	document.getElementById(id).focus();
}

function Confirm(){
	var correct_counter=0;
	var cn=current_box_id%n;
	if(cn==0){
		for(var i=0;i<n;i++){
			for(var j=0;j<n;j++){
				if(document.getElementById(current_box_id-(n-i-1)).value==word[j]){
					document.getElementById(current_box_id-(n-i-1)).style=	"background-color:#ffbf00;"
				}
			}
		}
		for(var i=0;i<n;i++){
			if(document.getElementById(current_box_id-(n-i-1)).value==word[i]){
				document.getElementById(current_box_id-(n-i-1)).style="background-color:#45794b;"
				correct_counter++;
			}
		}
		if(correct_counter==n){
			Win();
		} else if(current_box_id/n==row){
			Lose();
		} else{
			Focus(current_box_id+1);
			Blockline();
			current_box_id+=1;
		}
	} else{
		for(var i=0;i<cn;i++){
			for(var j=0;j<n;j++){
				if(document.getElementById(current_box_id-(cn-i-1)).value==word[j]){
					document.getElementById(current_box_id-(cn-i-1)).style=	"background-color:#ffbf00;"
				}
			}
		}
		for(var i=0;i<n;i++){
			if(document.getElementById(current_box_id-(cn-i-1)).value==word[i]){
				document.getElementById(current_box_id-(cn-i-1)).style="background-color:#45794b;"
				correct_counter++;
			}
		}
		if(correct_counter==n){
			Win();
		} else if((current_box_id+(n-cn))/n==row){
			Lose();
		} else{
			Focus(current_box_id+(n-cn)+1);
			Blockline();
			current_box_id+=(n-cn)+1;
		}
	}
}

function Blockline(){
	if(current_box_id%n==0){
		for(var i=1;i<=current_box_id;i++){
			document.getElementById(i).disabled=true;
		}
	} else{
		for(var i=1;i<=current_box_id+(n-current_box_id%n);i++){
			document.getElementById(i).disabled=true;
		}
	}
}

function Win(){
	Blur();
	if(window.confirm(">:( u won, happy? wanna restart?")){
		clean();
	}
}

function Lose(){
	Blur();
	if(window.confirm(">:) u lost, the word is: "+word[0]+word[1]+word[2]+word[3]+word[4]+", wanna restart?")){
		clean();
	}
}

function Blur(){
	if(document.getElementById("blur").style.filter == "blur(3px)"){
		document.getElementById("blur").style.filter = "blur(0px)";
	} else{
		document.getElementById("blur").style.filter = "blur(3px)";
	}
}

function clean(){
	for(var i=1;i<=n*row;i++){
		document.getElementById(i).disabled=false;
		document.getElementById(i).value="";
		document.getElementById(i).style="background-color:none;"
	}
	Blur();
	Focus(1);
	current_box_id=1;
}