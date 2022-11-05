
var n = 5;
var array = [n+1];
for(var i=0;i<n+1;i++){
	array[i]=0;
}


document.addEventListener("keyup", function (event) {
	if (event.keyCode === 8) {
		cancel()
	}
});

recorder();
function recorder(){
	alert(array[0]);
}

function cancel(){
	alert("no");
}

function jump_to_next_box(field){
	var box_id=parseInt(field.id);
	if (field.value.length >= field.maxLength) {
		document.getElementById(box_id+1).focus();
	}
}

function jump_to_conferm(field){
	if (field.value.length >= field.maxLength) {
		document.getElementById('conferm').focus();
	}
}
